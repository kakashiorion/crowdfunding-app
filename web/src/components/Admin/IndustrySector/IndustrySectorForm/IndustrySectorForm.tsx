import {
  Form,
  FormError,
  FieldError,
  Label,
  RadioField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditIndustrySectorById,
  UpdateIndustrySectorInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormIndustrySector = NonNullable<EditIndustrySectorById['industrySector']>

interface IndustrySectorFormProps {
  industrySector?: EditIndustrySectorById['industrySector']
  onSave: (
    data: UpdateIndustrySectorInput,
    id?: FormIndustrySector['id']
  ) => void
  error: RWGqlError
  loading: boolean
}

const IndustrySectorForm = (props: IndustrySectorFormProps) => {
  const onSubmit = (data: FormIndustrySector) => {
    props.onSave(data, props?.industrySector?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormIndustrySector> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="industry"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Industry
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-0"
            name="industry"
            defaultValue="EDUCATION"
            defaultChecked={props.industrySector?.industry?.includes(
              'EDUCATION'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Education</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-1"
            name="industry"
            defaultValue="HEALTHCARE"
            defaultChecked={props.industrySector?.industry?.includes(
              'HEALTHCARE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Healthcare</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-2"
            name="industry"
            defaultValue="PHARMACEUTICALS"
            defaultChecked={props.industrySector?.industry?.includes(
              'PHARMACEUTICALS'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Pharmaceuticals</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-3"
            name="industry"
            defaultValue="BANKING_AND_FINANCE"
            defaultChecked={props.industrySector?.industry?.includes(
              'BANKING_AND_FINANCE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Banking And_finance</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-4"
            name="industry"
            defaultValue="ENERGY"
            defaultChecked={props.industrySector?.industry?.includes('ENERGY')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Energy</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-5"
            name="industry"
            defaultValue="CONSUMER_GOODS"
            defaultChecked={props.industrySector?.industry?.includes(
              'CONSUMER_GOODS'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Consumer Goods</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-6"
            name="industry"
            defaultValue="RETAIL_ECOMMERCE"
            defaultChecked={props.industrySector?.industry?.includes(
              'RETAIL_ECOMMERCE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Retail Ecommerce</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-7"
            name="industry"
            defaultValue="REAL_ESTATE"
            defaultChecked={props.industrySector?.industry?.includes(
              'REAL_ESTATE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Real Estate</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-8"
            name="industry"
            defaultValue="FOOD_AND_BEVERAGE"
            defaultChecked={props.industrySector?.industry?.includes(
              'FOOD_AND_BEVERAGE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Food And_beverage</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-9"
            name="industry"
            defaultValue="IT"
            defaultChecked={props.industrySector?.industry?.includes('IT')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>It</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-10"
            name="industry"
            defaultValue="IOT"
            defaultChecked={props.industrySector?.industry?.includes('IOT')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Iot</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-11"
            name="industry"
            defaultValue="AGRICULTURE"
            defaultChecked={props.industrySector?.industry?.includes(
              'AGRICULTURE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Agriculture</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-12"
            name="industry"
            defaultValue="MANUFACTURING"
            defaultChecked={props.industrySector?.industry?.includes(
              'MANUFACTURING'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Manufacturing</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-13"
            name="industry"
            defaultValue="FASHION"
            defaultChecked={props.industrySector?.industry?.includes('FASHION')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Fashion</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-14"
            name="industry"
            defaultValue="MEDIA"
            defaultChecked={props.industrySector?.industry?.includes('MEDIA')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Media</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-15"
            name="industry"
            defaultValue="GAMING"
            defaultChecked={props.industrySector?.industry?.includes('GAMING')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Gaming</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-16"
            name="industry"
            defaultValue="ENTERTAINMENT"
            defaultChecked={props.industrySector?.industry?.includes(
              'ENTERTAINMENT'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Entertainment</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-17"
            name="industry"
            defaultValue="TELECOM"
            defaultChecked={props.industrySector?.industry?.includes('TELECOM')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Telecom</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-18"
            name="industry"
            defaultValue="LOGISTICS"
            defaultChecked={props.industrySector?.industry?.includes(
              'LOGISTICS'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Logistics</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-19"
            name="industry"
            defaultValue="TRANSPORTATION"
            defaultChecked={props.industrySector?.industry?.includes(
              'TRANSPORTATION'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Transportation</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-20"
            name="industry"
            defaultValue="AUTOMOTIVE"
            defaultChecked={props.industrySector?.industry?.includes(
              'AUTOMOTIVE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Automotive</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-21"
            name="industry"
            defaultValue="AVIATION"
            defaultChecked={props.industrySector?.industry?.includes(
              'AVIATION'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Aviation</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-22"
            name="industry"
            defaultValue="HEAVY_MACHINERY"
            defaultChecked={props.industrySector?.industry?.includes(
              'HEAVY_MACHINERY'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Heavy Machinery</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-23"
            name="industry"
            defaultValue="CHEMICAL"
            defaultChecked={props.industrySector?.industry?.includes(
              'CHEMICAL'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Chemical</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-24"
            name="industry"
            defaultValue="CONSTRUCTION"
            defaultChecked={props.industrySector?.industry?.includes(
              'CONSTRUCTION'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Construction</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-25"
            name="industry"
            defaultValue="DEFENCE"
            defaultChecked={props.industrySector?.industry?.includes('DEFENCE')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Defence</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-26"
            name="industry"
            defaultValue="ELECTRONICS"
            defaultChecked={props.industrySector?.industry?.includes(
              'ELECTRONICS'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Electronics</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-27"
            name="industry"
            defaultValue="FISHERIES"
            defaultChecked={props.industrySector?.industry?.includes(
              'FISHERIES'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Fisheries</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-28"
            name="industry"
            defaultValue="MINING"
            defaultChecked={props.industrySector?.industry?.includes('MINING')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Mining</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-29"
            name="industry"
            defaultValue="BIOTECHNOLOGY"
            defaultChecked={props.industrySector?.industry?.includes(
              'BIOTECHNOLOGY'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Biotechnology</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-30"
            name="industry"
            defaultValue="LEGAL"
            defaultChecked={props.industrySector?.industry?.includes('LEGAL')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Legal</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-31"
            name="industry"
            defaultValue="SPORTS_AND_FITNESS"
            defaultChecked={props.industrySector?.industry?.includes(
              'SPORTS_AND_FITNESS'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Sports And_fitness</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-32"
            name="industry"
            defaultValue="WASTE_MANAGEMENT"
            defaultChecked={props.industrySector?.industry?.includes(
              'WASTE_MANAGEMENT'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Waste Management</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-33"
            name="industry"
            defaultValue="WATER_MANAGEMENT"
            defaultChecked={props.industrySector?.industry?.includes(
              'WATER_MANAGEMENT'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Water Management</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-34"
            name="industry"
            defaultValue="TRAVEL_AND_HOSPITALITY"
            defaultChecked={props.industrySector?.industry?.includes(
              'TRAVEL_AND_HOSPITALITY'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Travel And_hospitality</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-35"
            name="industry"
            defaultValue="SECURITY"
            defaultChecked={props.industrySector?.industry?.includes(
              'SECURITY'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Security</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-36"
            name="industry"
            defaultValue="SOCIAL_SERVICE"
            defaultChecked={props.industrySector?.industry?.includes(
              'SOCIAL_SERVICE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Social Service</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-37"
            name="industry"
            defaultValue="MARKETING"
            defaultChecked={props.industrySector?.industry?.includes(
              'MARKETING'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Marketing</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-38"
            name="industry"
            defaultValue="HUMAN_RESOURCES"
            defaultChecked={props.industrySector?.industry?.includes(
              'HUMAN_RESOURCES'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Human Resources</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-39"
            name="industry"
            defaultValue="BUSINESS_MANAGEMENT"
            defaultChecked={props.industrySector?.industry?.includes(
              'BUSINESS_MANAGEMENT'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Business Management</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-industry-40"
            name="industry"
            defaultValue="AUTOMATION"
            defaultChecked={props.industrySector?.industry?.includes(
              'AUTOMATION'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Automation</div>
        </div>

        <FieldError name="industry" className="rw-field-error" />

        <Label
          name="sector"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sector
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-sector-0"
            name="sector"
            defaultValue="AI"
            defaultChecked={props.industrySector?.sector?.includes('AI')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Ai</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="industrySector-sector-1"
            name="sector"
            defaultValue="AUTOMATION"
            defaultChecked={props.industrySector?.sector?.includes(
              'AUTOMATION'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Automation</div>
        </div>

        <FieldError name="sector" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default IndustrySectorForm
