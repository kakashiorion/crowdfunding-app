import { useState } from 'react'

import moment from 'moment'
import type {
  FindInvestorJoinRoomQuery,
  FindInvestorJoinRoomQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation, type CellSuccessProps } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { PrimaryFilledButton } from 'src/components/Button/Button'
import {
  ProfilePicClassName,
  SingleSpanItemClassName,
  TextInputClassName,
} from 'src/components/Investor/InvestorConsts'
import {
  ErrorSubTextLabel,
  PrimaryMediumLabel,
  PrimaryTitleLabel,
  SmallLabel,
  SubTextLabel,
  PrimarySubTextLabel,
  TitleLabel,
} from 'src/components/Label/Label'

export const QUERY = gql`
  query FindInvestorJoinRoomQuery {
    investorJoinRoom: getActiveOfferRooms {
      id
      isPublic
      passcode
      timelineDays
      joinLimit
      createdAt
      offer {
        id
        capitalTargetLacs
        equityBeingIssued
        minTicketSizeLacs
        startup {
          id
          name
        }
      }
      kickedList {
        id
      }
      waitingList {
        id
      }
      participants {
        id
      }
    }
  }
`

const JOIN_OFFER_ROOM_MUTATION = gql`
  mutation joinOfferRoom($id: Int!) {
    joinOfferRoom(id: $id) {
      id
    }
  }
`

export const Success = ({
  investorJoinRoom,
}: CellSuccessProps<
  FindInvestorJoinRoomQuery,
  FindInvestorJoinRoomQueryVariables
>) => {
  const { currentUser } = useAuth()
  const [enteredPrivateRoomId, setEnteredPrivateRoomId] = useState('')
  const [enteredPrivateRoomPass, setEnteredPrivateRoomPass] = useState('')
  const [error1, setError1] = useState('')
  const [joinRoom] = useMutation(JOIN_OFFER_ROOM_MUTATION)

  const joinPrivate = async () => {
    if (
      Number.isNaN(enteredPrivateRoomId) ||
      parseInt(enteredPrivateRoomId) < 1
    ) {
      //Is offer room ID valid?
      setError1('Invalid Room ID')
    } else if (
      !investorJoinRoom.some((r) => r.id == Number(enteredPrivateRoomId))
    ) {
      //Is an active offer room?
      setError1('No active offer room with this ID.. Please check again')
    } else if (
      investorJoinRoom
        .find((r) => r.id == Number(enteredPrivateRoomId))
        ?.participants.some((i) => i?.id == currentUser?.id) ||
      investorJoinRoom
        .find((r) => r.id == Number(enteredPrivateRoomId))
        ?.waitingList.some((i) => i?.id == currentUser?.id)
    ) {
      //Has investor already joined?
      setError1('You have already joined this room')
    } else if (
      investorJoinRoom.find((r) => r.id == Number(enteredPrivateRoomId))
        ?.passcode != enteredPrivateRoomPass
    ) {
      //Does passcode match?
      setError1('Passcode does not match')
    } else {
      await joinRoom({
        variables: {
          id: Number(enteredPrivateRoomId),
        },
      }).then((d) => {
        navigate(routes.investorOfferRoom({ id: d.data.joinOfferRoom.id }))
      })
    }
  }

  const joinPublic = async (roomId: number) => {
    const room = investorJoinRoom.find((r) => r.id == roomId)
    if (
      room?.participants.some((i) => i?.id == currentUser?.id) ||
      room?.waitingList.some((i) => i?.id == currentUser?.id)
    ) {
      navigate(routes.investorOfferRoom({ id: room.id }))
    } else {
      await joinRoom({
        variables: {
          id: roomId,
        },
      }).then((d) => {
        navigate(routes.investorOfferRoom({ id: d.data.joinOfferRoom.id }))
      })
    }
  }

  return (
    <>
      <div className={'flex w-full flex-col items-start justify-start gap-2'}>
        <PrimaryTitleLabel label="Join a private offer room" />
        <input
          id="PrivateId"
          className={TextInputClassName}
          value={enteredPrivateRoomId}
          type="text"
          placeholder={'Enter room ID'}
          onChange={(e) => {
            setEnteredPrivateRoomId(e.target.value)
            error1 != '' && setError1('')
          }}
        />
        <input
          id="privatePassCode"
          className={TextInputClassName}
          value={enteredPrivateRoomPass}
          type="text"
          placeholder={'Enter passcode'}
          onChange={(e) => {
            setEnteredPrivateRoomPass(e.target.value)
            error1 != '' && setError1('')
          }}
        />
        <ErrorSubTextLabel label={error1} />
        <PrimaryFilledButton label="JOIN ROOM" action={() => joinPrivate()} />
      </div>
      <div className={'flex w-full flex-col items-start justify-start gap-2'}>
        <PrimaryTitleLabel label="Explore public offer rooms" />
        {investorJoinRoom
          .filter((x) => x.isPublic)
          //Show all the public offer rooms
          .map((item) => {
            const alreadyJoined =
              item.waitingList.some((x) => x?.id == currentUser?.id) ||
              item.participants.some((x) => x?.id == currentUser?.id)
            return (
              <div
                key={item.id}
                className="flex flex-col items-start gap-3 self-stretch rounded border border-black-l4 p-4 dark:border-white-d4 lg:gap-4"
              >
                <div className="flex items-center justify-start gap-2 self-stretch lg:gap-3">
                  <button
                    className={ProfilePicClassName}
                    onClick={() => {
                      //Navigate to startup's profile
                      navigate(
                        routes.investorStartupProfile({
                          id: item.offer.startup.id,
                        })
                      )
                    }}
                  >
                    {
                      //TODO: Add Profile pic as BG - phase 2
                      item.offer.startup.name[0].toUpperCase()
                    }
                  </button>
                  <PrimaryMediumLabel label={item.offer.startup.name} />
                </div>
                <TitleLabel
                  label={`${item.offer.equityBeingIssued}% equity for ₹${item.offer.capitalTargetLacs} lacs`}
                />
                <SubTextLabel
                  label={`Valuation: ₹${
                    item.offer.capitalTargetLacs / item.offer.equityBeingIssued
                  } crores`}
                />
                <div className="grid w-full grid-cols-2 gap-3 lg:grid-cols-4  lg:gap-4">
                  <div className={SingleSpanItemClassName}>
                    <PrimaryMediumLabel
                      label={`₹${item.offer.minTicketSizeLacs} lacs`}
                    />
                    <SmallLabel label="Min Ticket Size" />
                  </div>
                  <div className={SingleSpanItemClassName}>
                    <PrimaryMediumLabel
                      label={moment(item.createdAt)
                        .add(item.timelineDays, 'days')
                        .fromNow()}
                    />
                    <SmallLabel label="Closing" />
                  </div>
                  <div className={SingleSpanItemClassName}>
                    <PrimaryMediumLabel
                      label={
                        item.participants.length.toString() +
                        '/' +
                        item.joinLimit.toString()
                      }
                    />
                    <SmallLabel label="Participants" />
                  </div>
                  {item.waitingList.length > 0 && (
                    <div className={SingleSpanItemClassName}>
                      <PrimaryMediumLabel
                        label={item.waitingList.length.toString()}
                      />
                      <SmallLabel label="Waiting List" />
                    </div>
                  )}
                </div>
                {alreadyJoined ? (
                  <div
                    className={`flex items-center justify-center rounded-full border border-black px-2 py-1 font-bold dark:border-white lg:p-3 lg:py-1.5`}
                  >
                    <PrimarySubTextLabel label="Joined" />
                  </div>
                ) : (
                  <PrimaryFilledButton
                    label="JOIN"
                    action={() => joinPublic(item.id)}
                  />
                )}
              </div>
            )
          })}
      </div>
    </>
  )
}

// const Divider = () => {
//   return <div className="h-1"></div>
// }
