$(function(){

    var data = {
         restResults:[
            {
                "name":"Thirsty Lion", 
                "street_address":"2000 E Rio Salado Rd Pkwy #1041",
                "zip_code":"85281",
                "phone":"4809682920",
                "category":"American",
                "twitter_name":"@thirstylion"
            },
            {
                "name":"Green New American Vegitarian", 
                "street_address":"2240 N Scottsdale Rd",
                "zip_code":"85281",
                "phone":"4809419003",
                "category":"American",
                "twitter_name":"@greendamon"
            },
            {
                "name":"Four Peaks Brew", 
                "street_address":"1340 E 8th St #104",
                "zip_code":"85281",
                "phone":"4803039967",
                "category":"American",
                "twitter_name":"@fourpeaksbrew"
            }
        ],

        tweetResults:[
            {
                "tweet_count":"85",
                "twitter_name":"@thirstylion"
            },
            {
               "tweet_count":"5",
                "twitter_name":"@greendamon" 
            },
            {
                "tweet_count":"40",
                "twitter_name":"@fourpeaksbrew"
            }

        ]


    };

    var template = Handlebars.compile( $('#searchResults').html() );
    
    for (i in data.restResults) {
            $('table').append(template({name:data.restResults[i], count:data.tweetResults[i]}));
            
            
            
        
        // for (i in data.tweetResults) {
        //     $('table').append(template(data.tweetResults[i]));
        //     for (i in data.)

        // }
    }

    
});