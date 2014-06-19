
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Tasty Trend</title>
    <link rel="shortcut icon" href="images/ttlogo.png">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="mainContainer">
    <div class="heading">
        <div class="logo">Tasty Trend</div>
        <!-- status port -->
        <div class="status">
        <form id="logIn" action="index.php" method="POST">
            
        <button type='button' class='logIn'>Log In</button>

        <fieldset class="logToggle">
            <label for='email' >Email Address*:</label>
            <input type='text' name='logInEmail' id='logInEmail' maxlength="50">
        
            <label for='password' >Password*:</label>
            <input type='password' name='password' id='logInPassword' maxlength="50" >
        
            <button class='logInSubmit' type='Submit' name='Submit'>Submit</button>

            <input type='hidden' name='action' value='login'>
        </fieldset>

    </form>

    <form id="register" action="index.php" method="POST">
        
        <button type='button' class='register'>Register</button>

            <fieldset class="toggle">
           
            <label for='email' >Email Address*:</label>
            <input type='text' name='email' id='email' maxlength="50">
        
            <label for='password' >Password*:</label>
            <input type='password' name='password' id='password' maxlength="50" >
            
            <label for='confirmPassword' >Confirm Password*:</label>
            <input type='password' name='confirmPassword' id='confirmPassword' maxlength="50" >
            <div id="confirmMessage" class="confirmMessage"></div>
            
            <input type='submit' id="submitReg" name='Submit' value='Submit' disabled>

            <input type='hidden' name='action' value='register'>
             
            </fieldset>
    </form>
            
        
        </div>
    </div>

    <div class="results">

        <div class="category">
            
        <form action="model.php" method="GET"></form>
            <select name="category" id="category">
                <option value="Alindexl">All</option>
                <option value="American">American</option>
                <option value="Greek">Greek</option>
                <option value="Italian">Italian</option>
                <option value="Mexican">Mexican</option>
                <option value="Thai">Thai</option>
            </select>

            <input type="numeric" class="zip" id="zip" placeholder="Enter Location">
            <button type="submit" class="go">GO</button>
        </form>
        </div>

        <div id="map_div"></div>

       
        <table>
            <thead>    
                <tr>
                    <th>Restaurant</th>
                    <th>Tweet Count</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    </div>
    
</div>

<script id="searchResults" type="text/x-handlebars-template">

<tr>
    <td>{{name}}</td>
    <td>{{tweet_count}}</td>
    <td>{{rating}}</td>
</tr>
</script>

    
</body>

<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js" type="text/javascript"></script>
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
<script src="main.js"></script>
<script src="map.js"></script>
<script type="text/javascript" src="handlebars-v1.3.0.js"></script>

</html>

