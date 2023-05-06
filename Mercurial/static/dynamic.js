scrollLock.disablePageScroll();

var rswipes = 0;


async function get_trackart(query) {
    var url = "https://api.discogs.com/database/search?q="+query+"&token=bnPLBRwzshKaQtJKSosZLGrMYrTJWgIELnxwnVKG";
    try{
        let response = await fetch(url);
        let data = await response.json();
        return data.results[0].cover_image;
    }
    catch(err){
        return "static/image.png";
    }
    
}

async function get_track_js() {
    let response = await fetch("/data");
    let data = await response.json();
    return data;
}

async function get_reco() {
    let response = await fetch("/recochannel");
    let data = await response.json();
    return data;
}


function curtaintrick1(){

    $("#loading").animate({rotate: '+=1080deg'}, 2450, "swing");

    anime({
        targets: "#blank1",
        height: "103vh",
        bottom: "101vh",
        duration: 400,
        easing: "cubicBezier(1, .34, .42, 1)",
    })

}

function curtaintrick2(){
    anime({
        targets: "#blank1",
        height: "0vh",
        duration: 1100,
        easing: "cubicBezier(1, .34, .42, 1)",
    })
}

document.getElementById("base").addEventListener('swiped-left', function(e) {

    let data = {
        reco: "0"
    };
       
    let json = JSON.stringify(data);
        
    fetch("/data", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: json
    })
    .then(response => response.json())
    .then(data => console.log(data)) 
    .catch(error => console.error(error));


    anime({
        targets: "#base",
        left: "-150vw",
        duration: 1100,
        easing: "cubicBezier(.5, .05, .1, .3)",
        rotateZ: -15
    });

    setTimeout(function(){
        curtaintrick1();
    }, 600);

    setTimeout(function(){
        (async () => {
            let data = await get_track_js();
                var q;
                document.getElementById("trackname").innerHTML = "";
                document.getElementById("artists").innerHTML = "";
                console.log(data);
                if(data.track_name.length > 19){
                    document.getElementById("trackname").innerHTML = data.track_name.slice(0, 19) + "...";
                }
                else{
                    document.getElementById("trackname").innerHTML = data.track_name;
                }
        
                if(data.artist_name.length > 1){
                    for(q = 0; q < data.artist_name.length-1; q++){
                        document.getElementById("artists").innerHTML += data.artist_name[q] + ",";
                    }
                    document.getElementById("artists").innerHTML += data.artist_name[q];
                }
                else{
                    document.getElementById("artists").innerHTML = data.artist_name[0];
                }
        
                (async () => {
                    try{
                        let data_ = await get_trackart((data.track_name+" "+data.artist_name[0]).replaceAll(" ", "%20"));
                        document.getElementById("trackart").src = data_;
                        document.getElementById("bgimg").src = data_;
                    }
                    catch(err){
                        document.getElementById("trackart").src = "static/image.png";
                        document.getElementById("bgimg").src = data_;
                    }
                })();
                
            }
        )();
    }, 600);

    setTimeout(function(){
        anime({
            targets: "#base",
            left: "9.3vw",
            duration: 1000,
            easing: "cubicBezier(.5, .05, .1, .3)",
            rotateZ: 0
        });
    }, 2200);

    setTimeout(function(){
        curtaintrick2();
    }, 2300);

});


document.getElementById("base").addEventListener('swiped-right', function(e) {

    let data = {
        reco: "1"
    };
       
    let userswipe = JSON.stringify(data);
        
    fetch("/data", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: userswipe
    })
    .then(response => response.json())
    .then(data => console.log(data)) 
    .catch(error => console.error(error));

    rswipes += 1;

    anime({
        targets: "#base",
        left: "150vw",
        duration: 1100,
        easing: "cubicBezier(.5, .05, .1, .3)",
        rotateZ: 15
    });

    setTimeout(function(){
        curtaintrick1();
    }, 600);

    setTimeout(function(){
        (async () => {
            let data = await get_track_js();
                var q;
                document.getElementById("trackname").innerHTML = "";
                document.getElementById("artists").innerHTML = "";
                console.log(data);
                if(data.track_name.length > 19){
                    document.getElementById("trackname").innerHTML = data.track_name.slice(0, 19) + "...";
                }
                else{
                    document.getElementById("trackname").innerHTML = data.track_name;
                }
        
                if(data.artist_name.length > 1){
                    for(q = 0; q < data.artist_name.length-1; q++){
                        document.getElementById("artists").innerHTML += data.artist_name[q] + ",";
                    }
                    document.getElementById("artists").innerHTML += data.artist_name[q];
                }
                else{
                    document.getElementById("artists").innerHTML = data.artist_name[0];
                }
        
                (async () => {
                    try{
                        let data_ = await get_trackart((data.track_name+" "+data.artist_name[0]).replaceAll(" ", "%20"));
                        document.getElementById("trackart").src = data_;
                        document.getElementById("bgimg").src = data_;
                    }
                    catch(err){
                        document.getElementById("trackart").src = "static/image.png";
                        document.getElementById("bgimg").src = data_;
                    }
                })();
                
            }
        )();    
    }, 600);

    setTimeout(function(){
        anime({
            targets: "#base",
            left: "9.3vw",
            duration: 1000,
            easing: "cubicBezier(.5, .05, .1, .3)",
            rotateZ: 0
        });
    }, 2200);

    setTimeout(function(){
        curtaintrick2();
    }, 2300);

});


function reco(){
    
    (async () => {
        try{
            let data = await get_reco();
            console.log(data);
            var ctr = 1;
            var ctr2 = 1;
            Object.keys(data).forEach(function(key) {
                if(data[key].length > 18){
                    document.getElementById("recotext"+ctr+ctr2).innerHTML = key.slice(0, 15) + "...";
                }
                else{
                    document.getElementById("recotext"+ctr+ctr2).innerHTML = key;
                }
                ctr++;
            });
            ctr = 1;
            ctr2++;
            Object.values(data).forEach(function(value){
                var ln = value.length;
                if(ln == 1){
                    if(value[0].length > 19){
                        document.getElementById("recotext"+ctr+ctr2).innerHTML = value[0].slice(0, 17) + "...";
                    }
                    else{
                        document.getElementById("recotext"+ctr+ctr2).innerHTML = value[0];
                    }
                }
                else{
                    var t = "";
                    for(var q = 0; q < ln; q++){
                        t += value[q];
                    }
                    if(t.length > 19){
                        if(value.length == 1){
                            document.getElementById("recotext"+ctr+ctr2).innerHTML = value[0].slice(0, 17) + "...";
                        }
                        else if(value.length == 2){
                            document.getElementById("recotext"+ctr+ctr2).innerHTML = value[0];
                        }
                        else{
                            document.getElementById("recotext"+ctr+ctr2).innerHTML = value[0] + ", " + value[1];
                        }
                    }
                    else{
                        var strart = "";
                        for(var q = 0; q < ln-1; q++){
                            strart += value[q] + ", ";
                        }
                    }
                }
                ctr++;
            })}
        catch(err){
            console.log(err);
        }

        anime({
        targets: ["#trackart", "#trackname", "#artists", "#Recommendbutton"],
        opacity: 0,
        duration: 700,
        easing: "cubicBezier(.5, .05, .1, .3)",
    })

    setInterval(function(){
        document.getElementById("recobase").style.visibility = "visible";
        anime({
            targets: "#base",
            height: "80vh",
            duration: 1100,
            easing: "cubicBezier(.56,.25,.15,1)"
        })
    }, 1000);

    setTimeout(function(){
        anime({
            targets: "#recobase",
            opacity: 1,
            duration: 1000,
            easing: "cubicBezier(.5, .05, .1, .3)"
        })
    }, 1600);

    })();
    
}

$("#Recommendbutton").click(function(){
    if(rswipes < 3){
        anime({
            targets: "#popup",
            top: "2vh",
            duration: 800,
            easing: "cubicBezier(.5, .05, .1, .3)"
        });
        setTimeout(function(){
            anime({
                targets: "#popup",
                top: "-50vh",
                duration: 800,
                easing: "cubicBezier(.5, .05, .1, .3)"
            });
        }, 3500);
    }
    else{
        reco();
    }
});


$("#loading").click(function(){

    let data = {
        reco: "0"
    };
       
    let json = JSON.stringify(data);
        
    fetch("/data", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: json
    })
    .then(response => response.json())
    .then(data => console.log(data)) 
    .catch(error => console.error(error));

    (async () => {
        let data = await get_track_js();
            var q;
            document.getElementById("trackname").innerHTML = "";
            document.getElementById("artists").innerHTML = "";
            console.log(data);
            if(data.track_name.length > 19){
                document.getElementById("trackname").innerHTML = data.track_name.slice(0, 19) + "...";
            }
            else{
                document.getElementById("trackname").innerHTML = data.track_name;
            }
    
            if(data.artist_name.length > 1){
                for(q = 0; q < data.artist_name.length-1; q++){
                    document.getElementById("artists").innerHTML += data.artist_name[q] + ",";
                }
                document.getElementById("artists").innerHTML += data.artist_name[q];
            }
            else{
                document.getElementById("artists").innerHTML = data.artist_name[0];
            }
    
            (async () => {
                try{
                    let data_ = await get_trackart((data.track_name+" "+data.artist_name[0]).replaceAll(" ", "%20"));
                    document.getElementById("trackart").src = data_;
                    document.getElementById("bgimg").src = data_;
                }
                catch(err){
                    document.getElementById("trackart").src = "static/image.png";
                    document.getElementById("bgimg").src = data_;
                }
            })();
            
        }
    )();


    $("#loading").animate({rotate: '+=1080deg'}, 1800, "swing");

    setTimeout(function(){
        curtaintrick2();
    }, 1300);
});
