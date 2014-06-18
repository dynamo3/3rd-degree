
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
        <?php 
            
            if(!is_numeric($_SESSION['id'])) {
                include ('buttons.php');
        
            } else {
                include('logout.php');
                // echo "congrats";
                
            }
            // echo $logInStatus . '<br>'; echo $registerStatus;
        
        ?>
        
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

