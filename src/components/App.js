import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
class App extends React.Component {
    state = {videos : [] , selectedVideo : null}
    componentDidMount() {
        this.onTermSubmit("home");
    }

    onTermSubmit = async term => {
        const response = await youtube.get("https://www.googleapis.com/youtube/v3/search", {
                params: {
                    q: term
                },
            });
        this.setState({videos : response.data.items ,selectedVideo : response.data.items[0]} )
    }
    onVideoSelect = (video) => {
        this.setState({selectedVideo : video })
    }

    render() {
        return (
            <div className="ui container ">
            <SearchBar mylove={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                    <div className="eleven wide column">
                <VideoDetails video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
               <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default App;