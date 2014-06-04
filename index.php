<?php





?>




<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Grab Grub</title>
    <link rel="stylesheet" href="styles.css">
    <script src="main.js"></script>
</head>
<body>

<div class="mainContainer">
    <div class="heading">
        <!-- <div class="select"> -->
            <div class="category">
                
            <!-- <form action=""> -->
                <select name="restaurants" id="type">
                    <option value="All">All</option>
                    <option value="American">American</option>
                    <option value="Greek">Greek</option>
                    <option value="Italian">Italian</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Thai">Thai</option>
                </select>
                <input type="numeric" placeholder="ZIP CODE">
                <button type="submit">GO</button>
            <!-- </form> -->
            </div>

            <div class="user">
                <img src="">
                <span class="userName">Logged in as:</span>
                <nav>
                    <a href="#">My Account</a>
                    <a href="#">Log Out</a>
                </nav>
            </div>
        
        <!-- </div> -->
    </div>

    <div class="results">

            <img src="tempeMap.png" alt="">
       
        <table >
            <tr>
                <th>Restaurant</th>
                <th>Tweet Count</th>
                <th>Rating</th>
            </tr>
            <tr>
                <td>Carolina's</td>
                <td>354</td>
                <td>4.5</td>
            </tr>
            <tr>
                <td>Manuel's</td>
                <td>563</td>
                <td>4.0</td>
            </tr>
            <tr>
                <td>Arriba's</td>
                <td>235</td>
                <td>3.5</td>
            </tr>
            <tr>
                <td>La Parrilla Suiza</td>
                <td>214</td>
                <td>3.3</td>
            </tr>
            <tr>
                <td>Rosita's</td>
                <td>897</td>
                <td>5.0</td>
            </tr>
        </table>
    </div>
    
</div>
    
</body>
</html>