import React, {AppRegistry, Component, StyleSheet, Text, ScrollView, View} from 'react-native';

import {Icon,} from 'react-native-icons';
import {GiftedForm, GiftedFormManager} from 'react-native-gifted-form';
import { getStatusPage } from '../router';

import moment from 'moment';
import api from '../utils/api';

export default class Report extends Component {
    constructor(props, context) {
        super(props, context)
        this.getGeoLocation();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);

        this.state = {
            report: {
                lat: 0,
                lng: 0,
                created: Date.now()
            }
        };
    }
    /**
         * Get the current geo-location
         * @return {null}
         */
    getGeoLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            let report = this.state.report
            report.lat = position.coords.latitude
            report.lng = position.coords.longitude
            this.handleReportChange(report);
        }, (error) => console.log(error.message), {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000
        })
    }

    handleReportChange(report) {
        this.setState({report})
    }

    handleClear() {
      console.log('pressed');
      GiftedFormManager.reset('reportForm');
    }

    handleSubmit(values) {
      const report = {...this.state.report, ...values};

      this.setState({ report });

      console.log(report);
      api.postReport(report);
      //this.props.navigator.push(getStatusPage(report));
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <GiftedForm
                    formName='reportForm'
                    openModal= { (route) => { this.props.navigator.push(route); /* The ModalWidget will be opened using this method. Tested with ExNavigator */ } }
                    clearOnClose={true} /* delete the values of the form when unmounted */
                    defaults={{/* contact: 'Farid', 'gender{M}': true, password: 'abcdefg', country: 'FR', birthday: new Date(((new Date()).getFullYear() - 18)+''), */}}
                    validators= { {
                                    incident:
                                      { title: 'Incident Type', validate:
                                        [{ validator: (...args) => { if (args[0] === undefined) { return false; } return true; }, message: '{TITLE} is required', }]
                                      },
                                    }
                                  }>
                    <GiftedForm.SeparatorWidget/>
                    <GiftedForm.ModalWidget title='Incident Type' displayValue='incident' style={styles.modal}>
                        <GiftedForm.SeparatorWidget/>
                        <GiftedForm.SelectWidget name='incident' title='Incident Type' multiple={false}>
                            <GiftedForm.OptionWidget title='Aid' value='aid'/>
                            <GiftedForm.OptionWidget title='Meet & Greet' value='greet'/>
                            <GiftedForm.OptionWidget title='Security Check' value='security'/>
                            <GiftedForm.OptionWidget title='Trespassing' value='trespass'/>
                            <GiftedForm.OptionWidget title='Unlock' value='unlock'/>
                            <GiftedForm.OptionWidget title='Vandalism' value='vandal'/>
                        </GiftedForm.SelectWidget>
                    </GiftedForm.ModalWidget>

                    <GiftedForm.ModalWidget title='Severity' displayValue='severity' style={styles.modal}>
                        <GiftedForm.SeparatorWidget/>
                        <GiftedForm.SelectWidget name='severity' title='Severity' multiple={false}>
                            <GiftedForm.OptionWidget title='Major' value='major'/>
                            <GiftedForm.OptionWidget title='Minor' value='minor'/>
                            <GiftedForm.OptionWidget title='Followup' value='followup'/>
                            <GiftedForm.OptionWidget title='Emergency' value='emergency'/>
                        </GiftedForm.SelectWidget>
                    </GiftedForm.ModalWidget>
                    <GiftedForm.SwitchWidget title="Police Contacted" name="policeContacted" />
                  <GiftedForm.SeparatorWidget/>
                    <GiftedForm.TextInputWidget name='businessName' title='Business' placeholder='Business Name' clearButtonMode='while-editing'/>
                    <GiftedForm.TextInputWidget name='businessAddress' title='Address' placeholder='Business Address' clearButtonMode='while-editing'/>
                    <GiftedForm.SeparatorWidget/>
                    <GiftedForm.TextInputWidget name='primaryContact' title='Primary' placeholder='Primary Contact' clearButtonMode='while-editing' />
                    <GiftedForm.TextInputWidget name='primaryPhone' title='Phone' placeholder='541-522-5333' clearButtonMode='while-editing' />
                    <GiftedForm.TextInputWidget name='email' title='Email' placeholder='person@email.com' keyboardType='email-address' clearButtonMode='while-editing' />
                    <GiftedForm.SeparatorWidget/>
                    <GiftedForm.TextInputWidget name='additionalContact' title='Additional' placeholder='Additional Contact' clearButtonMode='while-editing' />
                    <GiftedForm.TextInputWidget name='additionalPhone' title='Phone' placeholder='541-522-5333' clearButtonMode='while-editing' />
                    <GiftedForm.SeparatorWidget/>


                    <GiftedForm.ModalWidget title='Note' displayValue='note' style={styles.modal} scrollEnabled={true} /* true by default */
                    >
                        <GiftedForm.SeparatorWidget/>
                        <GiftedForm.TextAreaWidget name='note' autoFocus={true} placeholder='Type notes here.'/>
                    </GiftedForm.ModalWidget>
                    <GiftedForm.SeparatorWidget/>
                    <GiftedForm.SubmitWidget title='File Report' widgetStyles={{
                        submitButton: {
                            backgroundColor: '#F82040'
                        }
                    }} onSubmit= { (isValid, values, validationResults, postSubmit = null, modalNavigator = null) => { if (isValid === true) { /* prepare object */ values.incident = values.incident[0]; if(values.severity) {values.severity = values.severity[0]}; this.handleSubmit(values);/* Implement the request to your server using values variable ** then you can do: ** postSubmit(); ** postSubmit(['An error occurred, please try again']); disable the loader and display an error message ** postSubmit(['Contact already taken', 'Email already taken']); disable the loader and display an error message ** GiftedFormManager.reset('signupForm'); clear the states of the form manually. 'signupForm' is the formName used */ } } }/>
                    <GiftedForm.NoticeWidget title='By submitting this report, you agree to the Terms of Service and Privacy Policity.'/>
                    <GiftedForm.HiddenWidget name='tos' value={true}/>
                </GiftedForm>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 64,
        backgroundColor: '#ccc'
    },
    modal: {
        marginTop: 64
    }
});
