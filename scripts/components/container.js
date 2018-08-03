import React from 'react';

// images 
import yosemite from "../images/yosemite.png";
import joshuaTree from "../images/joshuaTree.png";
import mammoth from "../images/mammoth2.png";
import patrickspoint from "../images/patrickspoint.png";
import yellowstone from "../images/yellowstone.png";
import zion from "../images/zion.png";

// Components 
import FindTrip from "./findtrip";
import MyTrips from "./mytrips";
import NavbarFeatures from './navbar';
import MainSection from './mainsection';
import Form from './form';
import Render from './render';
import Equipment from "./equipment/equipment";
import Footer from "./footer";

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trip: [{
                location: "Vancouver Island",
                departure: "May 2018",
                returning: "May 2018"
            }, {
                location: "Shenandoah National Park",
                departure: "August 2018",
                returning: "August 2018"
            }, {
                location: "Big Bend National Park",
                departure: "May 2019",
                returning: "May 2019"
            }],
            suggestedTrips: [{
                location: "Yosemite National Park",
                image: yosemite,
                description: "Not just a great valley, but a shrine to human foresight, the strength of granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra. First protected in 1864, Yosemite National Park is best known for its waterfalls, but within its nearly 1,200 square miles, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area, and much more.",
            }, {
                location: "Zion National Park",
                image: zion,
                description: "Follow the paths where ancient native people and pioneers walked. Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky. Experience wilderness in a narrow slot canyon. Zion’s unique array of plants and animals will enchant you as you absorb the rich history of the past and enjoy the excitement of present day adventures.",
            }, {
                location: "Yellowstone National Park",
                image: yellowstone,
                description: "Visit Yellowstone and experience the world's first national park. Marvel at a volcano’s hidden power rising up in colorful hot springs, mudpots, and geysers. Explore mountains, forests, and lakes to watch wildlife and witness the drama of the natural world unfold. Discover the history that led to the conservation of our national treasures “for the benefit and enjoyment of the people.”",
            }, {
                location: "Mammoth Lakes",
                image: mammoth,
                description: "Majestic in scale and awesome in its natural beauty, the year-round adventureland of Mammoth Lakes is one of those rare places that you have to see to still not totally believe. The name speaks to the size of the mountains, the expanse of the valleys, the incredible number of crystal clear mountain lakes and the endless opportunities for adventure just outside your door.",
            }, {
                location: "Joshua Tree National Park",
                image: joshuaTree,
                description: "Two distinct desert ecosystems, the Mojave and the Colorado, come together in Joshua Tree National Park. A fascinating variety of plants and animals make their homes in a land sculpted by strong winds and occasional torrents of rain. Dark night skies, a rich cultural history, and surreal geologic features add to the wonder of this vast wilderness in southern California. Come explore for yourself.",
            }, {
                location: "Patrick's Point",
                image: patrickspoint,
                description: "Near some of California's most impressive coastal scenery, including sheer cliffs, tide pools, beaches covered in semi-precious pebbles, and old sea stacks that rise in the surf like skyscrapers. Patrick's Point is a 640 acre park in the heart of the California coast's redwood country. The park's dense forests of spruce, hemlock, pine, fir and red alder stretch over an ocean headland with lovely wildflower-festooned meadows and a dramatic shoreline ranging from broad sandy beaches to sheer cliffs that rise high above the Pacific Ocean offer great opportunities to explore tide pools, search for agates and driftwood, watch whales and sea lions and brilliant sunset.",
            }],
            items: []
        }
    }

    onAddTrip(newTrip) {
        let addedTrips = [...this.state.trip];
        addedTrips.push(newTrip);
        this.setState({
            trip: addedTrips
        })
    }

    onDeleteTrip(index) {
        let removedTrip = [...this.state.trip]
        removedTrip.splice(index, 1);
        this.setState({
            trip: removedTrip
        });
    }
    
    onAdd(item) {
        let newItem = [...this.state.items];
        newItem.push(item);
        this.setState({
            items: newItem
        })
    }

    deleteItem(index) {
        let deletedItem = [...this.state.items];
        deletedItem.splice(index, 1);
        this.setState({
            items: deletedItem
        })
    }

    render() {
        return (
            <div id="everything">
                <NavbarFeatures/>
                <MainSection/>
                <FindTrip trips={this.state.suggestedTrips} createTrip={this.onAddTrip.bind(this)} />
                <MyTrips data={this.state.trip} deletetrip={this.onDeleteTrip.bind(this)} />
                <Equipment />
                <div>
                    <div className="row">
                        <Form addItem={this.onAdd.bind(this)} />
                    </div>                     
                    <div className="row">
                        <Render deleteItem={this.deleteItem.bind(this)} items={this.state.items} />
                    </div>
                </div>
                <div className="last-div">
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Container;


