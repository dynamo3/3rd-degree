
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Tasty Trend</title>
    <link rel="shortcut icon" href="ttlogo.png">
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css">
    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js" type="text/javascript"></script>
    <script src="http://maps.google.com/maps/api/js?sensor=true" type="text/javascript"></script>
    <script src="main.js"></script>
    <script src="map.js"></script>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="mainContainer">
    <div class="heading">
        <div class="logo">Tasty Trend</div>
        <form id="logIn" action="" method=>
            
            <button type='button' class='logIn'>Log In</button>

            <fieldset class="logToggle">
                <label for='email' >Email Address*:</label>
                <input type='text' name='email' id='logInEmail' maxlength="50"/>
            
                <label for='password' >Password*:</label>
                <input type='password' name='password' id='logInPassword' maxlength="50" />
            
                <input type='submit' name='Submit' value='Submit' />
            </fieldset>

        </form>

        <form id="register" action="register.php" method="POST">
            
            <button type='button' class='register'>Register</button>

                <fieldset class="toggle">
               
                <label for='email' >Email Address*:</label>
                <input type='text' name='email' id='email' maxlength="50"/>
            
                <label for='password' >Password*:</label>
                <input type='password' name='password' id='password' maxlength="50" />
                
                <label for='confirmPassword' >Confirm Password*:</label>
                <input type='password' name='confirmPassword' id='confirmPassword' maxlength="50" />
                <div id="confirmMessage" class="confirmMessage"></div>
                
                <input type='submit' id="submitReg" name='Submit' value='Submit' disabled/>
                 
                </fieldset>
        </form>
    </div>

    <div class="results">

        <div class="category">
            
        <form action="model.php" method="GET"></form>
            <select name="category" id="category">
                <option value="All">All</option>
                <option value="American">American</option>
                <option value="Greek">Greek</option>
                <option value="Italian">Italian</option>
                <option value="Mexican">Mexican</option>
                <option value="Thai">Thai</option>
            </select>

            <input type="numeric" class="zip" placeholder="ZIP CODE">
            <button type="submit" class="go">GO</button>
        </form>
        </div>

        <div id="map_div"></div>

       
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