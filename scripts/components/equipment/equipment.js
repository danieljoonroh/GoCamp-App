import React from 'react';
import CampItems from './campitems';
import SleepItems from './sleepitems';
import FireItems from './fireitems';
import KitchenItems from './kitchenitems';
import ActivityItems from './activityitems';
import MiscItems from './miscitems';

export default class Equipment extends React.Component {
    render() {
        return (
            <div id="equiment-component" className= "equipment">
                <h1 className="text-center"> Equipment: </h1>
                <div className="row text-center equiplist">
                    <CampItems />
                    <SleepItems />
                    <FireItems />
                </div>
                <div className="row text-center equiplist">
                    <KitchenItems />
                    <ActivityItems />
                    <MiscItems />
                </div>
            </div>
        )
    }
}

