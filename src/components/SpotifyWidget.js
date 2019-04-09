import React, { Component } from "react";
import axios from "axios";

class SpotifyWidget extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    try {
      axios
        .get(
          "https://api.spotify.com/v1/jbull328/top/artists?time_range=medium_term&limit=10&offset=5",
          {
            headers: {
              Accept: "application/json",
              client_id: "94235a5a2f6e4be28e35585b5c15f1b6",
              Authorization: "Bearer jbull328"
            }
          }
        )
        .then(res => {
          const data = res.data;
          this.setState({ data });
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="music-card">
        <div>Top of Card for</div>
      </div>
    );
  }
}

export default SpotifyWidget;
