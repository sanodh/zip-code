import React, { useEffect, useState } from "react";
import "../css/leaderboard.css";
import "firebase/database";

function Leaderboard() {



    return (
        <div>
            <div>
                <br></br>
                <br></br>
                <br></br>
                <h1 className="title">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Leaderboard</h1>
                <br></br>
                <br></br>
                <table id="Shooter">
                    <tr>
                        <th>Place</th>
                        <th>Name</th>
                        <th>Shot 1</th>
                        <th>Shot 2</th>
                        <th>Shot 3</th>
                        <th>Shot 4</th>
                        <th>Shot 5</th>
                        <th>Shot 6</th>
                        <th>Shot 7</th>
                        <th>Shot 8</th>
                        <th>Shot 9</th>
                        <th>Shot 10</th>
                        <th>Final Score</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Maria Anders</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>100</td>
                    </tr>
                   
                
                </table>
                <br></br>
                <br></br>
                <br></br>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <button class="button" ><span><a href="/dashboard">Dashboard</a></span></button>
                <br></br><br></br>
            </div>
        </div>
    );
}

export default Leaderboard;
