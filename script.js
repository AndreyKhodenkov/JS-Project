let date = new Date();
let body = document.querySelector('body')
body.setAttribute('onload','create()')
let wrapper = document.createElement('div')
wrapper.className = 'wrapper'
body.appendChild(wrapper)
let calendar = document.createElement('div')
calendar.className = 'calendar'
wrapper.appendChild(calendar)
let month = document.createElement('div')
month.className = 'month'
calendar.appendChild(month)
let leftArrow = document.createElement('div')
leftArrow.className = 'prev'
leftArrow.innerHTML = '&#10094;'
leftArrow.setAttribute('onclick', 'change("prev")')
month.append(leftArrow)
let flex = document.createElement('div')
flex.className = 'flex'
month.append(flex)
let rightArrow = document.createElement('div')
rightArrow.className = 'next'
rightArrow.innerHTML = '&#10095;'
rightArrow.setAttribute('onclick', 'change("next")')
month.append(rightArrow)
rightArrow.style.display = 'flex'
rightArrow.style.justifyContent = 'center'
rightArrow.style.alignItems = 'center'
rightArrow.style.width = '70px'
rightArrow.style.height = '70px'
rightArrow.style.borderRadius = '50%'
rightArrow.style.fontSize = '25px'
rightArrow.style.transition = 'all 0.4s'
leftArrow.style.display = 'flex'
leftArrow.style.justifyContent = 'center'
leftArrow.style.alignItems = 'center'
leftArrow.style.width = '70px'
leftArrow.style.height = '70px'
leftArrow.style.borderRadius = '50%'
leftArrow.style.fontSize = '25px'
leftArrow.style.transition = 'all 0.4s'
body.style.backgroundImage = 'url(img/34.jpeg)'
body.style.backgroundPosition = 'center'
body.style.backgroundSize = 'cover'
body.style.display = 'flex'
body.style.justifyContent = 'space-evenly'
let daysOfWeek = document.createElement('div')
calendar.append(daysOfWeek)
arrOfWeek = ["ПН","ВТ","СР","ЧТ","ПТ","СБ","ВС"]
for(let i = 0;i< arrOfWeek.length;i++){
    let day = document.createElement('div')
    day.className = 'weekdays'
    day.innerHTML = arrOfWeek[i]
    daysOfWeek.append(day)
}
month.style.backgroundImage = 'url(img/images.jpg)'
month.style.backgroundPosition = 'top'
month.style.backgroundSize = 'cover'
month.style.color = 'white'
daysOfWeek.style.display = 'flex'
daysOfWeek.style.justifyContent = 'space-around'
daysOfWeek.style.backgroundColor = '#2dacac'
let weeksStyle = document.querySelectorAll('.weekdays')
weeksStyle.forEach((item)=>{
   item.style.padding = '10px'
   item.style.textAlign = 'center'
   item.style.width = '14.28%' 
   item.style.fontWeight = ''
   
})
let allDays = document.createElement('div')
allDays.className = 'days'
calendar.append(allDays)
wrapper.style.display = 'flex'
body.style.margin = '0'
month.style.boxSizing = 'border-box'
month.style.borderTopLeftRadius = '20px'
month.style.borderTopRightRadius = '20px'
calendar.addEventListener('mouseover',()=>{
    main.style.opacity = '0.7'
    calendar.style.transition = 'all 1s'
})
calendar.addEventListener('mouseout',()=>{
    main.style.opacity = '1'
    calendar.style.transition = 'all 1s'

})
calendar.style.color = 'rgba(10, 0, 0, 1)'
calendar.style.width = '500px'
calendar.style.opacity = '1'
calendar.style.margin = '100px'
calendar.style.borderRadius = '20px'
calendar.style.backgroundColor = 'white'
calendar.style.boxShadow = '0px 0px 20px'
calendar.style.backgroundColor = 'rgb(37, 203, 183)'
calendar.style.color = 'white'
calendar.style.fontFamily = '"Fredoka One", cursive'
month.style.display = 'flex'
month.style.justifyContent = 'space-between'
month.style.alignItems = 'center'
month.style.padding = '20px 30px'
month.style.textAlign = 'center'
month.style.color = 'white'
month.style.fontSize = '30px'
month.style.padding = '50px'
allDays.style.padding = '20px 0'
allDays.style.display = 'flex'
allDays.style.flexWrap = 'wrap'

let styleDays = document.getElementsByClassName('days')
for(let i =0;i< styleDays.length; i++){
 styleDays[i].style.textAlign = 'center'
 styleDays[i].style.fontSize = '20px'
 styleDays[i].style.height = '300px'
}
let firstInFlex = document.createElement('div')
firstInFlex.id = 'month'
firstInFlex.style.fontSize = '40px'
flex.append(firstInFlex)
let flexDate = document.createElement('div')
flexDate.id = 'dateNow'
flex.append(flexDate)
        function create() {
            date.setDate(1);
            let day = date.getDay()-1;
            let dayNow = new Date();
            let endDate = new Date( date.getFullYear(),date.getMonth() + 1,0  ).getDate()
            let previously = new Date(date.getFullYear(),date.getMonth(),0).getDate();
            let arrOfmonths = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]
            document.getElementById("month").innerHTML = arrOfmonths[date.getMonth()];
            document.getElementById("dateNow").innerHTML = date.getFullYear()
            let num = "";
            let lastDayIndex = new Date(date.getFullYear(),date.getMonth() + 1,0).getDay();
            console.log(date.getDay());
            if(date.getDay()===0){
                for (x = 6; x > 0; x--) {
                    num += "<div class='prevDay'>" + (previously - x + 1) + "</div>";
                }
            }
            else {
                for (x = day; x > 0; x--) {
                num += "<div class='prevDay'>" + (previously - x + 1) + "</div>";
              }
            }
            for (i = 1; i <= endDate; i++) {
                    num += "<div class = 'allDays'>" + i + "</div>";
           }
                const nextDays = 7 - lastDayIndex;
                for (let j = 1; j <= nextDays; j++) {
                    num += "<div class = 'nextDay'>" + j + "</div>"
                    
                }
                document.getElementsByClassName("days")[0].innerHTML = num;       
            let styleOfPrev = document.getElementsByClassName('prevDay')
            for(let i = 0;i < styleOfPrev.length;i++){
            styleOfPrev[i].style.opacity = '0.4'
            styleOfPrev[i].style.width = '14.28%'
        }
            let styleOfNext = document.getElementsByClassName('nextDay')
            for(let i = 0;i < styleOfNext.length;i++){
                styleOfNext[i].style.opacity = '0.4'
                styleOfNext[i].style.width = '14.28%'
            }
            
        let another = document.getElementsByClassName('allDays')
        
        
        
        for(let i = 0;i < another.length;i++){
            if(i === dayNow.getDate() && date.getMonth() === dayNow.getMonth()&&dayNow.getFullYear()===date.getFullYear()){
                another[i-1].style.color = 'blue'
            }
              another[i].style.width = '14.2%'
            another[i].addEventListener('mouseover',()=>{    
                another[i].style.backgroundColor = '#1de9ac98'
                another[i].style.color = 'black'
                another[i].style.borderRadius = '40px'
                another[i].style.transition = 'all 1s'
            })
            another[i].addEventListener('mouseout',()=>{

                another[i].style.backgroundColor = ''
                another[i].style.color = 'white'
                another[i].style.transition = 'all 1s'
            })
            
    }
}
        function change(event) {
            if(event === "prev") {
                date.setMonth(date.getMonth() - 1);
            } else if(event === 'next') {
                date.setMonth(date.getMonth() + 1);
            }
            create();
        }
        
        //eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        //eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        
        let idCity = 625073
        let main = document.createElement('div')
        main.className = 'main'
        wrapper.append(main)
        main.style.width = '500px'
        main.style.opacity = '1'
        main.style.fontFamily = '"Baloo Tamma 2", cursive'
        main.style.boxShadow = '20px 0px 40px'
        main.addEventListener('mousemove',()=>{
            calendar.style.opacity = '0.7'
            main.style.transition = 'all 1s'
        })
        main.addEventListener('mouseout',()=>{
            calendar.style.opacity = '1'
            main.style.transition = 'all 1s'
        })
        let city = document.createElement('div')
        city.style.display = 'flex'
        city.style.justifyContent = 'space-around'
        city.style.width = '100%'
        city.style.height = '40px'
        city.style.marginTop = '30px'
        main.style.height = '600px'
        main.style.margin = '100px'
        main.style.borderRadius = '20px'
        let nameRegion = document.createElement('div')
        nameRegion.className = 'region'
        main.append(nameRegion)
        nameRegion.style.fontSize = '40px'
        nameRegion.style.letterSpacing = '6px'
        nameRegion.style.marginBottom = '40px'
        nameRegion.style.borderBottom = '1px solid white'
        nameRegion.style.color = 'white'
        let temp = document.createElement('div')
        temp.className = 'temp'
        main.append(temp)
        temp.append(nameRegion)
        temp.style.backgroundImage = 'url(img/231.jpg)'
       temp.style.color = 'white'
        temp.style.width = '100%'
        temp.style.display = 'flex'
        temp.style.justifyContent = 'center'
        temp.style.alignItems = 'center'
        temp.style.fontWeight = 'bold'
        temp.style.flexDirection = 'column'
        temp.style.backgroundSize = 'cover'
        temp.style.backgroundPosition = 'bottom'
        temp.style.fontFamily = ''
        temp.style.borderRadius  = '20px'
        temp.style.alignItems = 'space-between'
        let mainWeather = document.createElement('div')
        temp.style.width = '100%'
        temp.style.height = '600px'
        temp.style.borderBottomLeftRadius = '20px'
        temp.style.borderBottomRightRadius = '20px'
        let icon = document.createElement('img')
        let cel = document.createElement('div')
        let btn = document.createElement('div')
        btn.id = 'btn'
        btn.style.width = '90px'
        btn.style.height = '20px'
        btn.style.cursor = 'pointer'
        btn.innerHTML = 'show map/'
        btn.style.textTransform = 'uppercase'
        let btn2 = document.createElement('div')
        btn2.id = 'btn2'
        btn2.style.width = '90px'
        btn2.style.height = '20px'
        btn2.style.cursor = 'pointer'
        btn2.innerHTML = 'close map'
        btn2.style.textTransform = 'uppercase'
        temp.append(cel)
        cel.style.fontSize = '60px'
        temp.append(mainWeather)
        temp.append(icon)
        temp.append(btn)
        temp.append(btn2)
        temp.append(city)
        mainWeather.style.fontSize = '3rem'
        let citys = ''
        for(let p = 0; p <6; p++){
            citys = document.createElement('div')
            citys.className = ('styleC')
            city.append(citys)
        }
        let styleC = document.querySelectorAll('.styleC')
        styleC.forEach((item)=>{
            item.style.width = '80px'
            item.style.padding = '0px 1px'
            item.style.fontSize = '14px'
            item.style.textAlign = 'center'
            item.style.letterSpacing = '2px'
            item.style.textTransform = 'uppercase'
            item.style.color = 'white'
            item.style.borderRadius = '10px'
            item.style.cursor = 'pointer'
            item.style.transition = 'all 2s'
            item.addEventListener('mouseover',()=>{
                item.style.transition = 'all 2s'
                item.style.transform = 'rotate3d(0, 1, 0, 3.142rad)'
                item.style.color = '#E91E63'
            })
            item.addEventListener('mouseout',()=>{
                item.style.background = ''
                item.style.transform = ''
                item.style.color = 'white'
            })
        })
        styleC[0].innerHTML = 'Minsk'
        styleC[0].id = 625144
        styleC[0].className = [53.90349369, 27.56346880]
        styleC[1].innerHTML = 'Mogilev'
        styleC[1].id = 625073
        styleC[1].className = [53.89567829, 30.33629599]
        styleC[2].innerHTML = 'Gomel'
        styleC[2].id = 627907
        styleC[2].className = [52.42246563, 31.00764824]
        styleC[3].innerHTML = 'Grodno'
        styleC[3].id = 627904
        styleC[3].className = [53.67790261, 23.83233525]
        styleC[4].innerHTML = 'Brest'
        styleC[4].id = 629634
        styleC[4].className = [52.08824686, 23.70283611]
        styleC[5].innerHTML = 'Vitebsk'
        styleC[5].id = 620127
        styleC[5].className = [55.18286511, 30.20306446]


        let yandex = document.createElement('div')
        wrapper.append(yandex)
        yandex.style.width = '400px'
        yandex.style.height = '600px'
        yandex.style.margin = '100px'
        let panorama = document.createElement('div')
        panorama.id = 'panorama'
        calendar.style.display = ''
        let map = document.createElement('div')
        map.id = 'yandexMap'
        yandex.append(map)
        yandex.append(panorama)
        panorama.style.width = '500px'
        panorama.style.height = '300px'
        panorama.style.borderRadius = '20%'
        map.style.width = '500px'
        map.style.height = '300px'
        yandex.style.display = 'none'
    
        

        let link = `http://api.openweathermap.org/data/2.5/weather?id=${idCity}&APPID=cabfdbf68e8c407f2a0f708b8f7b89fe`
       //выделегировал
        city.addEventListener('click',()=>{
            let target = event.target
            if(target.tagName === 'DIV') {
                idCity = target.id  
                link = `http://api.openweathermap.org/data/2.5/weather?id=${idCity}&APPID=cabfdbf68e8c407f2a0f708b8f7b89fe`
                fetch(link)
                .then(function(resp){
                    return resp.json()
                })
                .then(function(data){
                    icon.setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`)
                    nameRegion.innerHTML = data.name.toUpperCase()
                    cel.innerHTML = Math.floor(data.main.temp - 273) + '&deg;'
                    mainWeather.innerHTML = data.weather[0].description
                })
                .catch(function(){
                }) 
            }
        })
        fetch(link)
        .then(function(resp){
            return resp.json()
        })
        .then(function(data){
             icon.setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`)
            nameRegion.innerHTML = data.name.toUpperCase()
            cel.innerHTML = Math.floor(data.main.temp - 273) + '&deg;'
            mainWeather.innerHTML = data.weather[0].description
            console.log(data);
        })
        .catch(function(){
        })
        setTimeout(() => {
            btn.className = 'animate__animated animate__wobble animate__infinite'
            btn.style.setProperty('--animate-duration', '2s')
        }, 5000);
        setTimeout(() => {
                btn2.className = 'animate__animated animate__wobble animate__infinite'
                btn2.style.setProperty('--animate-duration', '2s')
        }, 6000);
       
        let myMap;
        let player;
        let jjj = 0
        let cityMap = [53.89567829, 30.33629599]
        city.addEventListener('click',()=>{
        let target = event.target
        let b = 0
        let c = 0
        if(target.tagName === 'DIV') {
            ymaps.ready(init);
            function init () {
                jjj = target.className.split(',')
                 b = Number(jjj[0])
                 c = Number(jjj[1])
        myMap = new ymaps.Map('yandexMap', {
            center:[b, c],
            zoom: 11
        }, {
               searchControlProvider: 'yandex#search'
        });
    }
    myMap.destroy();
    ymaps.ready(function () {
        if (!ymaps.panorama.isSupported()) {
            return;
        }
        ymaps.panorama.locate([b, c]).done(
            function (panoramas) {
                if (panoramas.length > 0) {
                    player = new ymaps.panorama.Player(
                            'panorama',
                            panoramas[0],
                            { direction: [256, 16] }
                        );
                    }
                },
                );
                player.destroy()
        });
        
    }
 })  
 btn.addEventListener('click',()=>{
    calendar.style.display = 'none'
    yandex.style.display = 'block'
    ymaps.ready(init);
    function init () {
       
myMap = new ymaps.Map('yandexMap', {
    center:[53.89567829, 30.33629599],
    zoom: 10
}, {
       searchControlProvider: 'yandex#search'
});
}

ymaps.ready(function () {
if (!ymaps.panorama.isSupported()) {
    return;
}
ymaps.panorama.locate([53.89567829, 30.33629599]).done(
    function (panoramas) {
        if (panoramas.length > 0) {
            player = new ymaps.panorama.Player(
                    'panorama',
                    panoramas[0],
                    { direction: [256, 16] }
                );
            }
        },
        );
    });
    myMap.destroy()
    player.destroy()
})

btn2.addEventListener('click', ()=>{
    calendar.style.display = 'block'
    yandex.style.display = 'none'
})

