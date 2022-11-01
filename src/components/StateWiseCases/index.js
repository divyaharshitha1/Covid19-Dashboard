import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {LineChart, XAxis, YAxis, Tooltip, Line, BarChart, Bar} from 'recharts'

import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666549516/Group_7362_mlynni.svg',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666548571/Group_7354_zpu1pm.svg',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666545308/Group_7340_yzi2ym.svg',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666548321/Group_7341_e8qmri.svg',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666547664/Group_7335_sygtm8.svg',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666544035/Group_7361_xnth2c.svg',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666547965/Group_7353_cv86mk.svg',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666549317/Group_7357_zil3r0.svg',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666549226/Group_7358_eawfzn.svg',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666545476/Group_7349_oa9gra.svg',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666547143/Group_7337_bok5ju.svg',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666544991/Group_7332_vqpl4w.svg',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666544694/Group_7364_hx61n7.svg',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666544577/Group_7328_u5ypuj.svg',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666544826/Group_7342_pxdkti.svg',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666545553/Group_7339_y8era7.svg',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666547488/Group_7355_i3wqob.svg',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666549655/Group_7363_yunehm.svg',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666549160/Group_7359_wpljt9.svg',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666545095/Group_7350_idvvlm.svg',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666547410/Group_7336_jrcbib.svg',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666547317/Group_7346_olt0tk.svg',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666547742/Group_7344_mthnuc.svg',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666547002/Group_7347_dmjane.svg',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666547563/Group_7345_deqke0.svg',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666545875/Group_7348_ejavec.svg',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666549083/Group_7360_xxirlm.svg',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666546363/Group_7330_hmfcd0.svg',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666545682/Group_7333_b89brc.svg',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666546166/Group_7338_vckz4t.svg',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666547204/Group_7356_ewf3hg.svg',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666546720/Group_7351_poswvn.svg',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666548201/Group_7352_srjdi9.svg',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666547872/Group_7334_ofq71z.svg',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666545405/Group_7331_rezscj.svg',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
    image_url:
      'https://res.cloudinary.com/dmmum4bbq/image/upload/v1666548089/Group_7343_ipysox.svg',
  },
]

const cardConstants = {
  confirmed: 'CONFIRMED',
  active: 'ACTIVE',
  recovered: 'RECOVERED',
  deceased: 'DECEASED',
}

const appConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  progress: 'IN_PROGRESS',
}

const trendStatus = {
  cumulative: 'CUMULATIVE',
  daily: 'DAILY',
}

let lineChartData = {}
let districtNames = {}

class StateWiseCases extends Component {
  state = {
    requiredBasicDetails: [],
    cardStatus: cardConstants.confirmed,
    appStatus1: appConstants.initial,
    appStatus2: appConstants.initial,
    timeLineData: [],
    trendState: trendStatus.cumulative,
    selectValue: 'Select District',
  }

  componentDidMount() {
    this.setState({appStatus1: appConstants.progress}, this.getStateDetails)
    this.setState({appStatus2: appConstants.progress}, this.getTimeLineDetails)
  }

  changeDateFormat = dateValue => {
    const lastIndexValue = dateValue.slice(dateValue.length - 1)
    switch (lastIndexValue) {
      case '1':
        return lastIndexValue.concat('st')
      case '2':
        return lastIndexValue.concat('nd')
      case '3':
        return lastIndexValue.concat('rd')
      default:
        return lastIndexValue.concat('th')
    }
  }

  getStateDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {stateCode} = params
    const id = stateCode
    const apiUrl = 'https://apis.ccbp.in/covid19-state-wise-data/'
    const response = await fetch(apiUrl)
    const data = await response.json()
    const codeList = statesList.map(eachValue => eachValue.state_code)
    if (!codeList.includes(id)) {
      const {history} = this.props
      history.replace('/not-found')
    }
    if (response.ok) {
      const newData = {
        confirmed: data[id].total.confirmed,
        recovered: data[id].total.recovered,
        deceased: data[id].total.deceased,
        population: data[id].meta.population,
        active:
          data[id].total.confirmed -
          (data[id].total.recovered + data[id].total.deceased),
        idValue: id,
        name: statesList.find(eachValue => eachValue.state_code === id)
          .state_name,
        districts: data[id].districts,
        tested: data[id].total.tested,
        lastUpdated: data[id].meta.last_updated,
        imageUrl: statesList.find(eachValue => eachValue.state_code === id)
          .image_url,
      }
      this.setState({
        requiredBasicDetails: newData,
        appStatus1: appConstants.success,
      })
    }
  }

  getTimeLineDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {stateCode} = params
    const apiUrl = `https://apis.ccbp.in/covid19-timelines-data/${stateCode}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    const codeList = statesList.map(eachValue => eachValue.state_code)
    if (!codeList.includes(stateCode)) {
      const {history} = this.props
      history.replace('/not-found')
    }
    if (response.ok) {
      districtNames = data[`${stateCode}`].districts
      const newData = data[`${stateCode}`].dates
      this.setState({timeLineData: newData, appStatus2: appConstants.success})
    }
  }

  descendingList = newDistricts => {
    const newDistrictsList = newDistricts.sort((a, b) => {
      const fa = a.value
      const fb = b.value
      if (fa < fb) {
        return 1
      }
      if (fa > fb) {
        return -1
      }
      return 0
    })
    return newDistrictsList
  }

  onCardClick = cardState => this.setState({cardStatus: cardState})

  getDistrictValues = () => {
    const {requiredBasicDetails, cardStatus} = this.state
    const {districts} = requiredBasicDetails
    const newDistricts = []
    switch (cardStatus) {
      case cardConstants.confirmed:
        Object.keys(districts).forEach(key =>
          newDistricts.push({
            name: key,
            value:
              districts[key].total.confirmed === undefined
                ? 0
                : districts[key].total.confirmed,
          }),
        )
        return this.descendingList(newDistricts)
      case cardConstants.deceased:
        Object.keys(districts).forEach(key =>
          newDistricts.push({
            name: key,
            value:
              districts[key].total.deceased === undefined
                ? 0
                : districts[key].total.deceased,
          }),
        )
        return this.descendingList(newDistricts)
      case cardConstants.recovered:
        Object.keys(districts).forEach(key =>
          newDistricts.push({
            name: key,
            value:
              districts[key].total.recovered === undefined
                ? 0
                : districts[key].total.recovered,
          }),
        )
        return this.descendingList(newDistricts)
      default:
        Object.keys(districts).forEach(key =>
          newDistricts.push({
            name: key,
            value:
              (districts[key].total.confirmed === undefined
                ? 0
                : districts[key].total.confirmed) -
              ((districts[key].total.deceased === undefined
                ? 0
                : districts[key].total.deceased) +
                (districts[key].total.recovered === undefined
                  ? 0
                  : districts[key].total.recovered)),
          }),
        )
        return this.descendingList(newDistricts)
    }
  }

  renderStateSuccessContainer = () => {
    const {requiredBasicDetails, cardStatus} = this.state
    const confirmedCardClassName =
      cardStatus === cardConstants.confirmed
        ? 'card-list-item confirmed-background'
        : 'card-list-item'
    const activeCardClassName =
      cardStatus === cardConstants.active
        ? 'card-list-item active-background'
        : 'card-list-item'
    const recoveredCardClassName =
      cardStatus === cardConstants.recovered
        ? 'card-list-item recovered-background'
        : 'card-list-item'
    const deceasedCardClassName =
      cardStatus === cardConstants.deceased
        ? 'card-list-item deceased-background'
        : 'card-list-item'

    let districtValue = []
    if (requiredBasicDetails.length !== 0) {
      districtValue = this.getDistrictValues()
    }
    return (
      <div className="state-details">
        <div className="state-name-row">
          <h1 className="state-name-container">{requiredBasicDetails.name}</h1>
          <div className="test-num-container">
            <p className="test-title">Tested</p>
            <p className="test-num">{requiredBasicDetails.tested}</p>
          </div>
        </div>
        <p className="last-updated-date">
          {`Last update on ${requiredBasicDetails.lastUpdated}`}
        </p>
        <div className="state-specific-card-list">
          <div className={confirmedCardClassName}>
            <button
              type="button"
              className="card-list-btn"
              onClick={() => this.onCardClick(cardConstants.confirmed)}
              testid="stateSpecificConfirmedCasesContainer"
            >
              <p className="stats-title red">Confirmed</p>
              <img
                src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1665915497/check-mark_1_dsxjxe.png"
                className="stats-img"
                alt="state specific confirmed cases pic"
              />
              <p className="stats-count red">
                {requiredBasicDetails.confirmed}
              </p>
            </button>
          </div>
          <div className={activeCardClassName}>
            <button
              className="card-list-btn"
              type="button"
              onClick={() => this.onCardClick(cardConstants.active)}
              testid="stateSpecificActiveCasesContainer"
            >
              <p className="stats-title blue">Active</p>
              <img
                src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1665915864/protection_1_t3hwm5.png"
                className="stats-img"
                alt="state specific active cases pic"
              />
              <p className="stats-count blue">{requiredBasicDetails.active}</p>
            </button>
          </div>
          <div className={recoveredCardClassName}>
            <button
              className="card-list-btn"
              type="button"
              onClick={() => this.onCardClick(cardConstants.recovered)}
              testid="stateSpecificRecoveredCasesContainer"
            >
              <p className="stats-title green">Recovered</p>
              <img
                src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1665916014/recovered_1_mpmmwf.png"
                className="stats-img"
                alt="state specific recovered cases pic"
              />
              <p className="stats-count green">
                {requiredBasicDetails.recovered}
              </p>
            </button>
          </div>

          <div className={deceasedCardClassName}>
            <button
              className="card-list-btn"
              type="button"
              onClick={() => this.onCardClick(cardConstants.deceased)}
              testid="stateSpecificDeceasedCasesContainer"
            >
              <p className="stats-title gray">Deceased</p>
              <img
                src="https://res.cloudinary.com/dmmum4bbq/image/upload/v1665914808/breathing_1_ovl7ma.png"
                className="stats-img"
                alt="state specific deceased cases pic"
              />
              <p className="stats-count gray">
                {requiredBasicDetails.deceased}
              </p>
            </button>
          </div>
        </div>

        <div className="image-container">
          <img
            src={requiredBasicDetails.imageUrl}
            alt={requiredBasicDetails.idValue}
            className="state-image"
          />
          <div className="image-content">
            <p className="ncp-report">NCP report</p>
            <p className="population-heading">Population</p>
            <p className="content-num">{requiredBasicDetails.population}</p>
            <p className="population-heading">Tested</p>
            <p className="content-num">{requiredBasicDetails.tested}</p>
          </div>
        </div>
        <div className="districts-container">
          <h1
            className={`districts-heading ${cardStatus}-color`}
            testid="lineChartsContainer"
          >
            Top Districts
          </h1>
          <ul
            className="districts-list-container"
            testid="topDistrictsUnorderedList"
          >
            {districtValue.map(eachDistrict => (
              <li className="top-dist-list-item" key={eachDistrict.name}>
                <p className="top-dist-num">{eachDistrict.value}</p>
                <p className="top-dist-name">{eachDistrict.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderStateLoaderContainer = () => (
    <div className="state-loader-container" testid="stateDetailsLoader">
      <Loader type="TailSpin" color="#007BFF" height="25" width="25" />
    </div>
  )

  renderTimeLineLoaderContainer = () => (
    <div className="time-loader-container" testid="timelinesDataLoader">
      <Loader type="TailSpin" color="#007BFF" height="25" width="25" />
    </div>
  )

  getDateForBarChart = key => {
    const date = new Date(key)
    const newDate = date.toLocaleDateString('en-us', {
      month: 'short',
      day: '2-digit',
    })
    const dateList = newDate.split(' ')
    const dateFormat = []
    dateFormat.push(dateList[1])
    dateFormat.push(dateList[0].toUpperCase())
    const result = dateFormat.join(' ')
    return result
  }

  getTimeLineChartValues = () => {
    const {timeLineData, cardStatus} = this.state
    const newTimeLineData = []
    switch (cardStatus) {
      case cardConstants.confirmed:
        Object.keys(timeLineData).forEach(key =>
          newTimeLineData.push({
            date: this.getDateForBarChart(key),
            number: timeLineData[key].total.confirmed,
          }),
        )
        return newTimeLineData
      case cardConstants.deceased:
        Object.keys(timeLineData).forEach(key =>
          newTimeLineData.push({
            date: this.getDateForBarChart(key),
            number: timeLineData[key].total.deceased,
          }),
        )
        return newTimeLineData
      case cardConstants.recovered:
        Object.keys(timeLineData).forEach(key =>
          newTimeLineData.push({
            date: this.getDateForBarChart(key),
            number: timeLineData[key].total.recovered,
          }),
        )
        return newTimeLineData
      default:
        Object.keys(timeLineData).forEach(key =>
          newTimeLineData.push({
            date: this.getDateForBarChart(key),
            number:
              (timeLineData[key].total.confirmed === undefined
                ? 0
                : timeLineData[key].total.confirmed) -
              ((timeLineData[key].total.deceased === undefined
                ? 0
                : timeLineData[key].total.deceased) +
                (timeLineData[key].total.recovered === undefined
                  ? 0
                  : timeLineData[key].total.recovered)),
          }),
        )
        return newTimeLineData
    }
  }

  getLineChartData = () => {
    const {selectValue, trendState} = this.state
    let {timeLineData} = this.state
    if (selectValue !== 'Select District') {
      timeLineData = districtNames[selectValue].dates
    }
    const confirmedData = []
    Object.keys(timeLineData).forEach(key =>
      confirmedData.push({
        date: key,
        number:
          timeLineData[key].total.confirmed === undefined
            ? 0
            : timeLineData[key].total.confirmed,
      }),
    )
    const activeData = []
    Object.keys(timeLineData).forEach(key =>
      activeData.push({
        date: key,
        number:
          (timeLineData[key].total.confirmed === undefined
            ? 0
            : timeLineData[key].total.confirmed) -
          ((timeLineData[key].total.deceased === undefined
            ? 0
            : timeLineData[key].total.deceased) +
            (timeLineData[key].total.recovered === undefined
              ? 0
              : timeLineData[key].total.recovered)),
      }),
    )
    const recoveredData = []
    Object.keys(timeLineData).forEach(key =>
      recoveredData.push({
        date: key,
        number:
          timeLineData[key].total.recovered === undefined
            ? 0
            : timeLineData[key].total.recovered,
      }),
    )
    const deceasedData = []
    Object.keys(timeLineData).forEach(key =>
      deceasedData.push({
        date: key,
        number:
          timeLineData[key].total.deceased === undefined
            ? 0
            : timeLineData[key].total.deceased,
      }),
    )
    const testedData = []
    Object.keys(timeLineData).forEach(key =>
      testedData.push({
        date: key,
        number:
          timeLineData[key].total.tested === undefined
            ? 0
            : timeLineData[key].total.tested,
      }),
    )
    lineChartData = {
      confirmed: confirmedData,
      active: activeData,
      recovered: recoveredData,
      deceased: deceasedData,
      tested: testedData,
    }
    if (trendState === trendStatus.daily) {
      let refValue = 0
      const newConfirmedData = confirmedData.map(eachValue => {
        let newValue = 0
        newValue = eachValue.number - refValue
        refValue = eachValue.number
        return {
          date: eachValue.date,
          number: newValue,
        }
      })
      refValue = 0
      const newRecoveredData = recoveredData.map(eachValue => {
        let newValue = 0
        newValue = eachValue.number - refValue
        refValue = eachValue.number
        return {date: eachValue.date, number: newValue}
      })
      refValue = 0
      const newDeceasedData = deceasedData.map(eachValue => {
        let newValue = 0
        newValue = eachValue.number - refValue
        refValue = eachValue.number
        return {date: eachValue.date, number: newValue}
      })
      refValue = 0
      const newActiveData = activeData.map(eachValue => {
        let newValue = 0
        if (eachValue.number > refValue) {
          newValue = eachValue.number - refValue
          refValue = eachValue.number
        }
        refValue = eachValue.number
        return {
          date: eachValue.date,
          number: newValue,
        }
      })
      refValue = 0
      const newTestedData = testedData.map(eachValue => {
        let newValue = 0
        newValue = eachValue.number - refValue
        refValue = eachValue.number
        return {date: eachValue.date, number: newValue}
      })
      newConfirmedData.splice(0, 1)
      newActiveData.splice(0, 1)
      newRecoveredData.splice(0, 1)
      newDeceasedData.splice(0, 1)
      newTestedData.splice(0, 1)
      lineChartData = {
        confirmed: newConfirmedData,
        active: newActiveData,
        recovered: newRecoveredData,
        deceased: newDeceasedData,
        tested: newTestedData,
      }
    }
  }

  selectChange = event => {
    this.setState({selectValue: event.target.value}, this.getLineChartData)
  }

  trendChange = value => {
    this.setState({trendState: value})
  }

  renderTimeLineSuccessContainer = () => {
    const {timeLineData, cardStatus, trendState, selectValue} = this.state
    let newTimeLineData = []
    if (timeLineData.length !== 0) {
      newTimeLineData = this.getTimeLineChartValues()
      newTimeLineData = newTimeLineData.slice(-10)
    }
    let colorValue = '#9A0E31'
    switch (cardStatus) {
      case cardConstants.active:
        colorValue = '#0A4FA0'
        break
      case cardConstants.recovered:
        colorValue = '#216837'
        break
      case cardConstants.deceased:
        colorValue = '#474C57'
        break
      default:
        colorValue = '#9A0E31'
        break
    }
    this.getLineChartData()
    const daily =
      trendState === trendStatus.daily
        ? 'trend-button highlight-trend'
        : 'trend-button'
    const cumulative =
      trendState === trendStatus.cumulative
        ? 'trend-button highlight-trend'
        : 'trend-button'
    const selectOptions = Object.keys(districtNames)
    return (
      <div className="graphs-container" testid="lineChartsContainer">
        <div className="graphs-lg">
          <div className="bar-chart-lg">
            <BarChart
              width={700}
              height={240}
              barSize={40}
              data={newTimeLineData}
            >
              <XAxis
                dataKey="date"
                axisLine={false}
                interval={0}
                fontSize={12}
                tickLine={0}
                tick={{fill: colorValue, strokeWidth: 1}}
              />
              <Bar
                dataKey="number"
                fill={colorValue}
                radius={[5, 5, 0, 0]}
                label={{position: 'top', fill: colorValue, fontSize: 12}}
              />
            </BarChart>
          </div>
          <div className="bar-chart-mobile">
            <BarChart
              width={307}
              height={130}
              barSize={20}
              data={newTimeLineData}
            >
              <XAxis
                dataKey="date"
                axisLine={false}
                interval={0}
                fontSize={10}
                tickLine={0}
                tick={{fill: colorValue, strokeWidth: 1}}
              />
              <Bar
                dataKey="number"
                fill={colorValue}
                radius={[5, 5, 0, 0]}
                label={{position: 'top', fill: colorValue, fontSize: 10}}
              />
            </BarChart>
          </div>
          <h1 className="daily-spread-trends">Spread Trends</h1>
          <div className="trend-holder">
            <button
              className={cumulative}
              type="button"
              onClick={() => this.trendChange(trendStatus.cumulative)}
            >
              Cumulative
            </button>
            <button
              className={daily}
              type="button"
              onClick={() => this.trendChange(trendStatus.daily)}
            >
              Daily
            </button>
          </div>
          <div className="select-container">
            <select
              value={selectValue}
              className="select-element"
              onChange={this.selectChange}
            >
              <option value="Select District">Select District</option>
              {selectOptions.map(eachValue => (
                <option
                  key={eachValue}
                  value={eachValue}
                  className="options-container"
                >
                  {eachValue}
                </option>
              ))}
            </select>
          </div>
          <div className="line-chart-lg">
            <div className="chart confirmed-background">
              <p className="chart-title CONFIRMED-color">Confirmed</p>
              <LineChart
                width={800}
                height={250}
                data={lineChartData.confirmed}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={12}
                  tick={{fill: '#FF073A', strokeWidth: 1}}
                />
                <YAxis fontSize={12} tick={{fill: '#FF073A', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#FF073A"
                  strokeWidth={2}
                  dot={{fill: '#FF073A'}}
                />
              </LineChart>
            </div>
            <div className="chart active-background">
              <p className="chart-title ACTIVE-color">Active</p>
              <LineChart
                width={800}
                height={250}
                data={lineChartData.active}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={12}
                  tick={{fill: '#0A4FA0', strokeWidth: 1}}
                />
                <YAxis fontSize={12} tick={{fill: '#0A4FA0', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#0A4FA0"
                  strokeWidth={2}
                  dot={{fill: '#0A4FA0'}}
                />
              </LineChart>
            </div>
            <div className="chart recovered-background">
              <p className="chart-title RECOVERED-color">Recovered</p>
              <LineChart
                width={800}
                height={250}
                data={lineChartData.recovered}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={12}
                  tick={{fill: '#216837', strokeWidth: 1}}
                />
                <YAxis fontSize={12} tick={{fill: '#216837', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#216837"
                  strokeWidth={2}
                  dot={{fill: '#216837'}}
                />
              </LineChart>
            </div>
            <div className="chart deceased-background">
              <p className="chart-title DECEASED-color">Deceased</p>
              <LineChart
                width={800}
                height={250}
                data={lineChartData.deceased}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={12}
                  tick={{fill: '#474C57', strokeWidth: 1}}
                />
                <YAxis fontSize={12} tick={{fill: '#474C57', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#474C57"
                  strokeWidth={2}
                  dot={{fill: '#474C57'}}
                />
              </LineChart>
            </div>
            <div className="tested-background">
              <p className="tested-title">Tested</p>
              <LineChart
                width={800}
                height={250}
                data={lineChartData.tested}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={12}
                  tick={{fill: '#9673B9', strokeWidth: 1}}
                />
                <YAxis fontSize={12} tick={{fill: '#9673B9', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#9673B9"
                  strokeWidth={2}
                  dot={{fill: '#9673B9'}}
                />
              </LineChart>
            </div>
          </div>
          <div className="line-chart-mobile">
            <div className="chart confirmed-background">
              <p className="chart-title CONFIRMED-color">Confirmed</p>
              <LineChart
                width={272}
                height={191.5}
                data={lineChartData.confirmed}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={10}
                  tick={{fill: '#FF073A', strokeWidth: 1}}
                />
                <YAxis fontSize={10} tick={{fill: '#FF073A', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#FF073A"
                  strokeWidth={2}
                  dot={{fill: '#FF073A'}}
                />
              </LineChart>
            </div>
            <div className="chart active-background">
              <p className="chart-title ACTIVE-color">Active</p>
              <LineChart
                width={272}
                height={191.5}
                data={lineChartData.active}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={10}
                  tick={{fill: '#0A4FA0', strokeWidth: 1}}
                />
                <YAxis fontSize={10} tick={{fill: '#0A4FA0', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#0A4FA0"
                  strokeWidth={2}
                  dot={{fill: '#0A4FA0'}}
                />
              </LineChart>
            </div>
            <div className="chart recovered-background">
              <p className="chart-title RECOVERED-color">Recovered</p>
              <LineChart
                width={272}
                height={191.5}
                data={lineChartData.recovered}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={10}
                  tick={{fill: '#216837', strokeWidth: 1}}
                />
                <YAxis fontSize={10} tick={{fill: '#216837', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#216837"
                  strokeWidth={2}
                  dot={{fill: '#216837'}}
                />
              </LineChart>
            </div>
            <div className="chart deceased-background">
              <p className="chart-title DECEASED-color">Deceased</p>
              <LineChart
                width={272}
                height={191.2}
                data={lineChartData.deceased}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={10}
                  tick={{fill: '#474C57', strokeWidth: 1}}
                />
                <YAxis fontSize={10} tick={{fill: '#474C57', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#474C57"
                  strokeWidth={2}
                  dot={{fill: '#474C57'}}
                />
              </LineChart>
            </div>
            <div className="tested-background">
              <p className="chart-title tested-title">Tested</p>
              <LineChart
                width={272}
                height={191.5}
                data={lineChartData.tested}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={10}
                  tick={{fill: '#9673B9', strokeWidth: 1}}
                />
                <YAxis fontSize={10} tick={{fill: '#9673B9', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#9673B9"
                  strokeWidth={2}
                  dot={{fill: '#9673B9'}}
                />
              </LineChart>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderStateContentStatus = () => {
    const {appStatus1} = this.state
    switch (appStatus1) {
      case appConstants.success:
        return this.renderStateSuccessContainer()
      default:
        return this.renderStateLoaderContainer()
    }
  }

  renderTimeLineContentStatus = () => {
    const {appStatus2} = this.state
    switch (appStatus2) {
      case appConstants.success:
        return this.renderTimeLineSuccessContainer()
      default:
        return this.renderTimeLineLoaderContainer()
    }
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <div className="main-container">
          {this.renderStateContentStatus()}
          {this.renderTimeLineContentStatus()}
          <div className="footer-container">
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default StateWiseCases
