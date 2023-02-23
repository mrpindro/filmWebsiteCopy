(function() {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {

            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");

            document.querySelector(".active").classList.remove("active")

            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
})()


let search = document.getElementById('search');
let search_icon = document.getElementById('search_icon');

search_icon.addEventListener('click', ()=>{
    search.classList.toggle('search_input')
})


let cato_bx = document.getElementById('cato-bx');
let right_scroll = document.getElementById('right-scroll');
let left_scroll = document.getElementById('left-scroll');

left_scroll.addEventListener('click', ()=>{
    cato_bx.scrollLeft -= 100;
})

right_scroll.addEventListener('click', ()=>{
    cato_bx.scrollLeft += 100;
})


let film_bx_1 = document.getElementById('film-bx-1');
let right_scroll1 = document.getElementById('right-scroll1');
let left_scroll1 = document.getElementById('left-scroll1');

left_scroll1.addEventListener('click', ()=>{
    film_bx_1.scrollLeft -= 150;
})

right_scroll1.addEventListener('click', ()=>{
    film_bx_1.scrollLeft += 150;
})


// year and a-z box start
let year = document.getElementById('year');
let a_z = document.getElementById('a-z');

year.addEventListener('click', ()=>{
    year.classList.toggle('show_year1')
})
a_z.addEventListener('click', ()=>{
    a_z.classList.toggle('show_year1')
})
// year and a-z box end


// category list box start
let list = document.getElementById('cato-list');

list.addEventListener('click', ()=>{
    list.classList.toggle('show_list')
})
// category list box end


// header slider start
let header_dur = document.getElementById('header-dur');
let header_gen = document.getElementById('header-gen');
let header_title = document.getElementById('header-title');
let header_par = document.getElementById('header-par');
let header = document.getElementsByTagName('header')[0];
let slider_btn =document.getElementsByClassName('slider');

const slider_load = ()=>{
    setTimeout(()=>{
        header.style.background = "url('img/theundergroundrailroad.jpeg') no-repeat center/cover";
        header_dur.innerText = "1 Season";
        header_gen.innerHTML = '<i class="fa-solid fa-star"></i>7.5<span>Action / History / Adventure / Drama </span>';
        header_title.innerText = "The Underground Railroad";
        header_par.innerText = "After escaping a Georgia plantation, Cora boards a train embarking on a harrowing trip as she seeks true freedom while being hunted by a notorious slave catcher";
        slider_btn[0].style.background = "#fff";
        slider_btn[1].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
    }, 0000);
    setTimeout(()=>{
        header.style.background = "url('img/fences1.jpg') no-repeat top/cover";
        header_dur.innerText = "2h 19m";
        header_gen.innerHTML = '<i class="fa-solid fa-star"></i>6.5<span>Romance / History / Adventure / Drama </span>';
        header_title.innerText = "Fences";
        header_par.innerText = "Fences is a 2016 American period drama film starring, produced and directed by Denzel Washington and written by August Wilson, based on his Pulitzer Prize-winning 1985 play of the same name. In addition to Washington, the film also stars Viola Davis, Stephen McKinley Henderson, Jovan Adepo, Russell Hornsby, Mykelti Williamson, and Saniyya Sidney.";
        slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[1].style.background = "#fff";
        slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
    }, 5000);
    setTimeout(()=>{
        header.style.background = "url('img/half-of-a-yellow-sun.jpeg') no-repeat top/cover";
        header_dur.innerText = "1h 53m";
        header_gen.innerHTML = '<i class="fa-solid fa-star"></i>7.5<span>Romance / History / Adventure / Drama </span>';
        header_title.innerText = "Half of a Yellow Sun";
        header_par.innerText = "Half of a Yellow Sun is a 2013 Anglo-Nigerian drama film directed by Biyi Bandele and based on the novel of the same name by Chimamanda Ngozi Adichie. The film is historical fiction that follows two sisters who are caught up in the outbreak of the Nigerian Civil War.";
        slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[1].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[2].style.background = "#fff";
    }, 10000);
}

setInterval(slider_load, 15000);
slider_load();


// video  control start

let plays = document.getElementById('play');
let videos = document.getElementById('video');
let play_btn = document.getElementById('play-btn');

play_btn.addEventListener('click', ()=>{
    videos.play();
    plays.classList.add('fa-pause');
    plays.classList.remove('fa-play');
})

plays.addEventListener('click', ()=>{
    if (videos.paused || videos.currentTime <= 0) {
        plays.classList.add('fa-pause');
        plays.classList.remove('fa-play');
        videos.play();  
    } else {
        plays.classList.remove('fa-pause');
        plays.classList.add('fa-play');
        videos.pause();
    }
});

// videos time update
// Start 
videos.addEventListener('timeupdate', ()=>{
    let start_time = document.getElementById('start-time');
    let end_time = document.getElementById('end-time');
    let video_duration = videos.duration;
    let min = Math.floor(video_duration / 60);
    let hour = Math.floor(min / 60);
    video_current_time = videos.currentTime;

    let start_min = Math.floor(video_current_time / 60);
    let start_sec = Math.floor(video_current_time % 60);
    let start_hour = Math.floor(start_min / 60);

    if (start_min < 10) {
        start_min = "0" + start_min;
    }
    if (start_sec < 10) {
        start_sec = "0" + start_sec;
    }
    
    start_time.innerText = start_min + ":" + start_sec;

    if (start_hour < 10) {
        start_hour = "0" + start_min;
    }
    if (start_min == 60 || start_min > 60) {
        start_time.innerText = start_hour + ":" + start_min + ":" + start_sec;
    }

    // end
    let end_min = min - start_min;
    let end_sec = video_duration - start_sec;
    let end_hour = hour - start_hour;

    let end_secs = Math.floor(end_sec % 60);
    if (end_secs < 10) {
        end_secs = "0" + end_secs;
    }
    let end_mins = Math.floor(end_min % 60);
    if (end_mins < 10) {
        end_mins = "0" + end_mins;
    }
    let end_hours = Math.floor(end_hour / 60);
    if (end_hours < 10) {
        end_hours = "0" + end_hours;
    }

    end_time.innerText = "-" + end_mins + ":" + end_secs;

    if (end_min == 60 || end_min > 60) {
        end_time.innerText = "-" + end_hours + ":" + end_mins + ":" + end_secs;
    }


        // seekbar start
    let seek = document.getElementById('seek');
    let seek_2 = document.getElementById('seek-2');
    let seek_dot = document.getElementById('seek-dot');


    let progressbar = parseInt((videos.currentTime / videos.duration) * 100);

    seek.value = progressbar;
    let seekbar =  seek.value;
    seek_2.style.width = `${seekbar}%`;
    seek_dot.style.left = `${seekbar}%`;

    // seekbar value change
    let sec_30 = document.getElementById('sec-30');
    seek.addEventListener('change', ()=>{
        videos.currentTime = seek.value * videos.duration / 100;

        sec_30.addEventListener('click', ()=>{
            videos.currentTime = seek.value * ((videos.duration - 30) / 100);
        });
    })
    // video end and event
    videos.addEventListener('ended', ()=>{
        plays.classList.remove('fa-pause');
        plays.classList.add('fa-play');
    })
});

//  volume change
let start_seekbar_end = document.querySelector('.start-seekbar-end');
let cc_vol_screen = document.querySelector('.cc-vol-screen');
let vol = document.getElementById('vol');
let vol_icon = document.getElementById('vol-icon');

vol_icon.addEventListener('click', ()=>{
    cc_vol_screen.classList.toggle('cc_vol');
    start_seekbar_end.classList.toggle('start_seekbar');
    vol.classList.toggle('input_vol');
});

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.add('fa-volume-off');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.add('fa-volume-low');
        vol_icon.classList.remove('fa-volume-off');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.remove('fa-volume-off');
    }

    let vol_a = vol.value;
    videos.volume = vol_a / 100;
});

// full screen start
let full_screen = document.getElementById('full-screen');

full_screen.addEventListener('click', ()=>{
    videos.requestFullscreen();
});

// video box start
let video_title = document.getElementsByClassName('video-title');
let video_1 = document.getElementsByClassName('video-1');

video_1[0].addEventListener('click', ()=>{
    videos.src = "video/Malcolm X.MP4";
    videos.play();
    video_title[0].innerText = "Malcolm X trailer HD 1992";
    plays.classList.add('fa-pause');
    plays.classList.remove('fa-play');
});
video_1[1].addEventListener('click', ()=>{
    videos.src = "video/The Odyssey - 1997 - Part 1 of 2.MP4";
    videos.play();
    video_title[0].innerText = "The Odyssey Part 1";
    plays.classList.add('fa-pause');
    plays.classList.remove('fa-play');
});
video_1[2].addEventListener('click', ()=>{
    videos.src = "video/Fences-trailer.MP4";
    videos.play();
    video_title[0].innerText = "Fences trailer HD 2016";
    plays.classList.add('fa-pause');
    plays.classList.remove('fa-play');
});
video_1[3].addEventListener('click', ()=>{
    videos.src = "video/Half of a Yellow Sun.MP4";
    videos.play();
    video_title[0].innerText = "Half of a Yellow Sun trailer HD 2013";
    plays.classList.add('fa-pause');
    plays.classList.remove('fa-play');
});
video_1[4].addEventListener('click', ()=>{
    videos.src = "video/Green Book.MP4";
    videos.play();
    video_title[0].innerText = "Green Book trailer HD 2018";
    plays.classList.add('fa-pause');
    plays.classList.remove('fa-play');
});


// films box set 

const films = [
    {
        id: 1,
        img: "img/bloodDiamond.jpeg",
        title: "Blood Diamond",
        letter: "b",
        genre1: "Action",
        genre2: "Crime",
        genre3: "Adventure",
        genre4: "Biography",
        genre5: "none",
        genre6: "none",
        genre7: "Documentary",
        genre8: "none",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        genre13: "none",
        genre14: "none",
        genre15: "none",
        year: 2006,
        rate: 7.5,
        url: "bloodDiamond.html",
        tppr: "recent",
        msot: "film",
    },
    {
        id: 2,
        img: "img/the-wolf-of-wall-street-2013.jpeg",
        title: "The Wolf of Wall Street",
        letter: "t",
        genre1: "Action",
        genre2: "Crime",
        genre3: "Adventure",
        genre4: "none",
        genre5: "none",
        genre6: "none",
        genre7: "none",
        genre8: "Drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        genre13: "Romance",
        genre14: "Fantasy",
        genre15: "none",
        year: 2013,
        rate: 8.0,
        url: "thewolfofwallstreet.html",
        tppr: "recent",
        msot: "film",
    },
    {
        id: 3,
        img: "img/The-prince-of-the-desert.jpeg",
        title: "The Prince of The Desert",
        letter: "t",
        genre1: "Action",
        genre2: "Crime",
        genre3: "Adventure",
        genre4: "Biography",
        genre5: "none",
        genre6: "none",
        genre7: "Documentary",
        genre8: "Drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        genre13: "none",
        genre14: "none",
        genre15: "none",
        year: 2020,
        rate: 6.5,
        url: "theprinceofthedesert.html",
        tppr: "recent",
        msot: "film",
        upload: "latest",
    },
    {
        id: 4,
        img: "img/the-originals-2013-2018.jpeg",
        title: "The Originals (series)",
        letter: "t",
        genre1: "Action",
        genre2: "Crime",
        genre3: "Adventure",
        genre4: "none",
        genre5: "none",
        genre6: "none",
        genre7: "none",
        genre8: "Drama",
        genre9: "Webseries",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        genre13: "Romance",
        genre14: "Fantasy",
        genre15: "none",
        year: 2018,
        rate: 7.5,
        url: "theoriginals.html",
        tppr: "recent",
        msot: "series",
        upload: "latest",
    },
    {
        id: 5,
        img: "img/the-curious-case-of-benjamin-button-2008.jpg",
        title: "The Curious Case of Benjamin Button",
        letter: "t",
        genre1: "Action",
        genre2: "Crime",
        genre3: "Adventure",
        genre4: "Biography",
        genre5: "none",
        genre6: "none",
        genre7: "Documentary",
        genre8: "Drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        genre13: "none",
        genre14: "Fantasy",
        genre15: "none",
        year: 2008,
        rate: 7.5,
        url: "thecuriouscaseofbenjaminbutton.html",
        tppr: "recent",
        msot: "film",
    },
    {
        id: 6,
        img: "img/prisonBreak(series-2005-2017).jpeg",
        title: "Prison Break (series)",
        letter: "p",
        genre1: "Action",
        genre2: "Crime",
        genre3: "Adventure",
        genre4: "none",
        genre5: "none",
        genre6: "none",
        genre7: "none",
        genre8: "Drama",
        genre9: "Webseries",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        genre13: "Romance",
        genre14: "Fantasy",
        genre15: "none",
        year: 2017,
        rate: 7.5,
        url: "prisonBreak.html",
        tppr: "recent",
        msot: "series",
        upload: "latest"
    },
    {
        id: 7,
        img: "img/Peaky-blinders-2013-2022.jpeg",
        title: "Peaky Blinders (series)",
        letter: "p",
        genre1: "Action",
        genre2: "Crime",
        genre3: "Adventure",
        genre4: "none",
        genre5: "none",
        genre6: "none",
        genre7: "Documentary",
        genre8: "Drama",
        genre9: "webseries",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        genre13: "Romance",
        genre14: "Fantasy",
        genre15: "none",
        year: 2022,
        rate: 9.0,
        url: "peakyBlinders.html",
        tppr: "recent",
        msot: "series",
        upload: "latest",
    },
    {
        id: 8,
        img: "img/papillon.jpeg",
        title: "Papillon",
        letter: "p",
        genre1: "Action",
        genre2: "Crime",
        genre3: "Adventure",
        genre4: "Biography",
        genre5: "none",
        genre6: "none",
        genre7: "Documentary",
        genre8: "Drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        genre13: "none",
        genre14: "none",
        genre15: "none",
        year: 2017,
        rate: 7.5,
        url: "Papillon.html",
        tppr: "recent",
        msot: "film",
        upload: "latest",
    },
    {
        id: 9,
        img: "img/merlin-2008-2012.jpeg",
        title: "Merlin (series)",
        letter: "m",
        genre1: "Action",
        genre2: "Crime",
        genre3: "Adventure",
        genre4: "Biography",
        genre5: "none",
        genre6: "none",
        genre7: "Documentary",
        genre8: "Drama",
        genre9: "Webseries",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        genre13: "none",
        genre14: "Fantasy",
        genre15: "none",
        year: 2012,
        rate: 7.5,
        url: "merlin.html",
        tppr: "recent",
        msot: "series",
    },
    {
        id: 10,
        img: "img/malcolmX.jpeg",
        title: "Malcolm X",
        letter: "m",
        genre1: "Action",
        genre2: "Crime",
        genre3: "Adventure",
        genre4: "Biography",
        genre5: "none",
        genre6: "none",
        genre7: "Documentary",
        genre8: "Drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        genre13: "none",
        genre14: "none",
        genre15: "none",
        year: 1992,
        rate: 8.5,
        url: "malcolmX.html",
        tppr: "recent",
        msot: "film",
    },
    {
        id: 11,
        img: "img/Luther-2010-2019.jpg",
        title: "Luther (series)",
        letter: "l",
        genre1: "Action",
        genre2: "Crime",
        genre3: "Adventure",
        genre4: "Biography",
        genre5: "none",
        genre6: "none",
        genre7: "Documentary",
        genre8: "Drama",
        genre9: "webseries",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        genre13: "none",
        genre14: "Fantasy",
        genre15: "none",
        year: 2019,
        rate: 7.5,
        url: "Luther.html",
        tppr: "recent",
        msot: "series",
        upload: "latest"
    },
    {
        id: 12,
        img: "img/How-to-get-away-with-murder-2014-2020.jpg",
        title: "How to get away with murder (series)",
        letter: "h",
        genre1: "Action",
        genre2: "Crime",
        genre3: "Adventure",
        genre4: "none",
        genre5: "none",
        genre6: "none",
        genre7: "none",
        genre8: "Drama",
        genre9: "Webseries",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        genre13: "Romance",
        genre14: "Fantasy",
        genre15: "none",
        year: 2020,
        rate: 7.5,
        url: "howtogetawaywithmurder.html",
        tppr: "recent",
        msot: "series",
        upload: "latest",
    },
    {
        id: 13,
        img: "img/half-of-a-yellow-sun-2013.jpeg",
        title: "Half of a Yellow Sun",
        letter: "h",
        genre1: "Action",
        genre2: "Crime",
        genre3: "Adventure",
        genre4: "Biography",
        genre5: "none",
        genre6: "Comedy",
        genre7: "Documentary",
        genre8: "Drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        genre13: "none",
        genre14: "none",
        genre15: "none",
        year: 2013,
        rate: 7.5,
        url: "halfofayellowsun.html",
        tppr: "recent",
        msot: "film",
    },
    {
        id: 14,
        img: "img/greenBookj.jpeg",
        title: "Green Book",
        letter: "g",
        genre1: "Action",
        genre2: "Crime",
        genre3: "Adventure",
        genre4: "Biography",
        genre5: "none",
        genre6: "none",
        genre7: "Documentary",
        genre8: "Drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        genre13: "none",
        genre14: "none",
        genre15: "none",
        year: 2018,
        rate: 8.5,
        url: "greenBook.html",
        tppr: "recent",
        msot: "film",
        upload: "latest",
    },
    {
        id: 15,
        img: "img/Genius-2016.jpg",
        title: "Genius",
        letter: "g",
        genre1: "none",
        genre2: "none",
        genre3: "Adventure",
        genre4: "Biography",
        genre5: "none",
        genre6: "none",
        genre7: "Documentary",
        genre8: "Drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        genre13: "Romance",
        genre14: "none",
        genre15: "none",
        year: 2016,
        rate: 7.5,
        url: "Genius.html",
        tppr: "recent",
        msot: "film",
        upload: "latest",
    },
    {
        id: 16,
        img: "img/fences.jpeg",
        title: "Fences",
        letter: "f",
        genre1: "none",
        genre2: "none",
        genre3: "Adventure",
        genre4: "none",
        genre5: "none",
        genre6: "Comedy",
        genre7: "none",
        genre8: "Drama",
        genre9: "none",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        genre13: "Romance",
        genre14: "none",
        genre15: "none",
        year: 2016,
        rate: 6.5,
        url: "Fences.html",
        tppr: "recent",
        msot: "film",
        upload: "latest",
    },
    {
        id: 17,
        img: "img/Fantastic-beasts-and-where-to-find-them-2017.jpg",
        title: "Fantastic Beasts and Where to Find them",
        letter: "f",
        genre1: "Action",
        genre2: "Crime",
        genre3: "Adventure",
        genre4: "Biography",
        genre5: "none",
        genre6: "Comedy",
        genre7: "none",
        genre8: "Drama",
        genre9: "none",
        genre10: "none",
        genre11: "SciFi",
        genre12: "none",
        genre13: "none",
        genre14: "Fantasy",
        genre15: "none",
        year: 2017,
        rate: 7.5,
        url: "fantsticBeastAndWhereToFindThem.html",
        tppr: "recent",
        msot: "film",
        upload: "latest",
    },
    {
        id: 18,
        img: "img/24-2001-2010.jpg",
        title: "24 (series)",
        letter: "h",
        genre1: "Action",
        genre2: "Crime",
        genre3: "Adventure",
        genre4: "Biography",
        genre5: "none",
        genre6: "none",
        genre7: "none",
        genre8: "Drama",
        genre9: "webseries",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        genre13: "none",
        genre14: "Fantasy",
        genre15: "none",
        year: 2010,
        rate: 7.5,
        url: "24.html",
        tppr: "recent",
        msot: "series",
    },
    {
        id: 19,
        img: "img/spartacus-2010-2013.jpeg",
        title: "Spartacus (series)",
        letter: "s",
        genre1: "Action",
        genre2: "Crime",
        genre3: "Adventure",
        genre4: "Biography",
        genre5: "none",
        genre6: "none",
        genre7: "Documentary",
        genre8: "Drama",
        genre9: "Webseries",
        genre10: "18+",
        genre11: "none",
        genre12: "Horror",
        genre13: "none",
        genre14: "none",
        genre15: "none",
        year:  2013,
        rate: 8.0,
        url: "Spartacus.html",
        tppr: "recent",
        msot: "series",
    },
    {
        id: 20,
        img: "img/breaking-bad-2008-2013.jpeg",
        title: "Breaking Bad (series)",
        letter: "b",
        genre1: "Action",
        genre2: "Crime",
        genre3: "Adventure",
        genre4: "none",
        genre5: "none",
        genre6: "Comedy",
        genre7: "none",
        genre8: "Drama",
        genre9: "Webseries",
        genre10: "none",
        genre11: "none",
        genre12: "none",
        genre13: "none",
        genre14: "Fantasy",
        genre15: "none",
        year: 2013,
        rate: 8.5,
        url: "breakingBad.html",
        tppr: "recent",
        msot: "series",
    },

];

// action button active box 
let action1 = document.getElementById('action1');
let action_bx = document.getElementById('action-bx');

action1.addEventListener('click', ()=>{
    action1.classList.toggle('cato_button_active');
    action_bx.classList.toggle('film_box_active');
});

const action_array = films.filter((e)=>{
    return e.genre1 == "Action";
})

action_array.forEach(element =>{
    const { img, title, year, url, rate} = element;
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <a href="${url}">
          <img src="${img}" alt="${title}">
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-eye"></i>
                <i class="fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
    `

    action_bx.appendChild(card);
});


// crime button active box 
let crime1 = document.getElementById('crime1');
let crime_bx = document.getElementById('crime-bx');

crime1.addEventListener('click', ()=>{
    crime1.classList.toggle('cato_button_active');
    crime_bx.classList.toggle('film_box_active');
});

const crime_array = films.filter((e)=>{
    return e.genre2 == "Crime";
})

crime_array.forEach(element =>{
    const { img, title, year, url, rate} = element;
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <a href="${url}">
          <img src="${img}" alt="${title}">
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-eye"></i>
                <i class="fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
    `

    crime_bx.appendChild(card);
});

// drama button active box 
let drama1 = document.getElementById('drama1');
let drama_bx = document.getElementById('drama-bx');

drama1.addEventListener('click', ()=>{
    drama1.classList.toggle('cato_button_active');
    drama_bx.classList.toggle('film_box_active');
});

const drama_array = films.filter((e)=>{
    return e.genre8 == "Drama";
})

drama_array.forEach(element =>{
    const { img, title, year, url, rate} = element;
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <a href="${url}">
          <img src="${img}" alt="${title}">
          <div class="content">
            <h5>${title}</h5>
            <h6>
              <span>${year}</span>
              <div class="rate">
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-eye"></i>
                <i class="fa-solid fa-star"></i>
                <h6>${rate}</h6>
              </div>
            </h6>
          </div>
        </a>
    `

    drama_bx.appendChild(card);
});

// film box2 start
// // all box start 
// let all = document.getElementById('all');

// window.addEventListener('load', ()=>{
//     films.forEach(element => {
//         const { img, title, year, url, rate} = element;
//         let card = document.createElement('div');
//         card.classList.add('card');
//         card.innerHTML = `
//         <a href="${url}">
//               <img src="${img}" alt="${title}">
//               <div class="content">
//                 <h5>${title}</h5>
//                 <h6>
//                   <span>${year}</span>
//                   <div class="rate">
//                     <i class="fa-solid fa-heart"></i>
//                     <i class="fa-solid fa-eye"></i>
//                     <i class="fa-solid fa-star"></i>
//                     <h6>${rate}</h6>
//                   </div>
//                 </h6>
//               </div>
//             </a>
//         `
    
//         all.appendChild(card); 
//     })
// })

// // latest box start 
// let latest = document.getElementById('latest');

// let latest_array = films.filter((e)=>{
//     return e.upload == "latest";
// })

// window.addEventListener('load', ()=>{
//     latest_array.forEach(element => {
//         const { img, title, year, url, rate} = element;
//         let card = document.createElement('div');
//         card.classList.add('card');
//         card.innerHTML = `
//         <a href="${url}">
//               <img src="${img}" alt="${title}">
//               <div class="content">
//                 <h5>${title}</h5>
//                 <h6>
//                   <span>${year}</span>
//                   <div class="rate">
//                     <i class="fa-solid fa-heart"></i>
//                     <i class="fa-solid fa-eye"></i>
//                     <i class="fa-solid fa-star"></i>
//                     <h6>${rate}</h6>
//                   </div>
//                 </h6>
//               </div>
//             </a>
//         `
    
//         latest.appendChild(card); 
//     })
// })

// // year2022 box start 
// let year_2022 = document.getElementById('year-2022');

// let year2022_array = films.filter((e)=>{
//     return e.year == "2022";
// })

// window.addEventListener('load', ()=>{
//     year2022_array.forEach(element => {
//         const { img, title, year, url, rate} = element;
//         let card = document.createElement('div');
//         card.classList.add('card');
//         card.innerHTML = `
//         <a href="${url}">
//               <img src="${img}" alt="${title}">
//               <div class="content">
//                 <h5>${title}</h5>
//                 <h6>
//                   <span>${year}</span>
//                   <div class="rate">
//                     <i class="fa-solid fa-heart"></i>
//                     <i class="fa-solid fa-eye"></i>
//                     <i class="fa-solid fa-star"></i>
//                     <h6>${rate}</h6>
//                   </div>
//                 </h6>
//               </div>
//             </a>
//         `
    
//         year_2022.appendChild(card); 
//     })
// })

// // year2020 box start 
// let year_2020 = document.getElementById('year-2020');

// let year2020_array = films.filter((e)=>{
//     return e.year == "2020";
// })

// window.addEventListener('load', ()=>{
//     year2020_array.forEach(element => {
//         const { img, title, year, url, rate} = element;
//         let card = document.createElement('div');
//         card.classList.add('card');
//         card.innerHTML = `
//         <a href="${url}">
//               <img src="${img}" alt="${title}">
//               <div class="content">
//                 <h5>${title}</h5>
//                 <h6>
//                   <span>${year}</span>
//                   <div class="rate">
//                     <i class="fa-solid fa-heart"></i>
//                     <i class="fa-solid fa-eye"></i>
//                     <i class="fa-solid fa-star"></i>
//                     <h6>${rate}</h6>
//                   </div>
//                 </h6>
//               </div>
//             </a>
//         `
    
//         year_2020.appendChild(card); 
//     })
// })

// // year2013 box start 
// let year_2013 = document.getElementById('year-2013');

// let year2013_array = films.filter((e)=>{
//     return e.year == "2013";
// })

// window.addEventListener('load', ()=>{
//     year2013_array.forEach(element => {
//         const { img, title, year, url, rate} = element;
//         let card = document.createElement('div');
//         card.classList.add('card');
//         card.innerHTML = `
//         <a href="${url}">
//               <img src="${img}" alt="${title}">
//               <div class="content">
//                 <h5>${title}</h5>
//                 <h6>
//                   <span>${year}</span>
//                   <div class="rate">
//                     <i class="fa-solid fa-heart"></i>
//                     <i class="fa-solid fa-eye"></i>
//                     <i class="fa-solid fa-star"></i>
//                     <h6>${rate}</h6>
//                   </div>
//                 </h6>
//               </div>
//             </a>
//         `
    
//         year_2013.appendChild(card); 
//     })
// })

// // letterB box start 
// let letter_b = document.getElementById('letter-b');

// let letter_b_array = films.filter((e)=>{
//     return e.letter == "b";
// })

// window.addEventListener('load', ()=>{
//     letter_b_array.forEach(element => {
//         const { img, title, year, url, rate} = element;
//         let card = document.createElement('div');
//         card.classList.add('card');
//         card.innerHTML = `
//         <a href="${url}">
//               <img src="${img}" alt="${title}">
//               <div class="content">
//                 <h5>${title}</h5>
//                 <h6>
//                   <span>${year}</span>
//                   <div class="rate">
//                     <i class="fa-solid fa-heart"></i>
//                     <i class="fa-solid fa-eye"></i>
//                     <i class="fa-solid fa-star"></i>
//                     <h6>${rate}</h6>
//                   </div>
//                 </h6>
//               </div>
//             </a>
//         `
    
//         letter_b.appendChild(card); 
//     })
// })

// // letterH box start 
// let letter_h = document.getElementById('letter-h');

// let letter_h_array = films.filter((e)=>{
//     return e.letter == "h";
// })

// window.addEventListener('load', ()=>{
//     letter_h_array.forEach(element => {
//         const { img, title, year, url, rate} = element;
//         let card = document.createElement('div');
//         card.classList.add('card');
//         card.innerHTML = `
//         <a href="${url}">
//               <img src="${img}" alt="${title}">
//               <div class="content">
//                 <h5>${title}</h5>
//                 <h6>
//                   <span>${year}</span>
//                   <div class="rate">
//                     <i class="fa-solid fa-heart"></i>
//                     <i class="fa-solid fa-eye"></i>
//                     <i class="fa-solid fa-star"></i>
//                     <h6>${rate}</h6>
//                   </div>
//                 </h6>
//               </div>
//             </a>
//         `
    
//         letter_h.appendChild(card); 
//     })
// })

// // letterT box start 
// let letter_t = document.getElementById('letter-t');

// let letter_t_array = films.filter((e)=>{
//     return e.letter == "t";
// })

// window.addEventListener('load', ()=>{
//     letter_t_array.forEach(element => {
//         const { img, title, year, url, rate} = element;
//         let card = document.createElement('div');
//         card.classList.add('card');
//         card.innerHTML = `
//         <a href="${url}">
//               <img src="${img}" alt="${title}">
//               <div class="content">
//                 <h5>${title}</h5>
//                 <h6>
//                   <span>${year}</span>
//                   <div class="rate">
//                     <i class="fa-solid fa-heart"></i>
//                     <i class="fa-solid fa-eye"></i>
//                     <i class="fa-solid fa-star"></i>
//                     <h6>${rate}</h6>
//                   </div>
//                 </h6>
//               </div>
//             </a>
//         `
    
//         letter_t.appendChild(card); 
//     })
// })

// // Rate4 box start 
// let rate4 = document.getElementById('rate4');

// let rate4_array = films.filter((e)=>{
//     return e.rate <= 8;
// })

// window.addEventListener('load', ()=>{
//     rate4_array.forEach(element => {
//         const { img, title, year, url, rate} = element;
//         let card = document.createElement('div');
//         card.classList.add('card');
//         card.innerHTML = `
//         <a href="${url}">
//               <img src="${img}" alt="${title}">
//               <div class="content">
//                 <h5>${title}</h5>
//                 <h6>
//                   <span>${year}</span>
//                   <div class="rate">
//                     <i class="fa-solid fa-heart"></i>
//                     <i class="fa-solid fa-eye"></i>
//                     <i class="fa-solid fa-star"></i>
//                     <h6>${rate}</h6>
//                   </div>
//                 </h6>
//               </div>
//             </a>
//         `
    
//         rate4.appendChild(card); 
//     })
// })

// // Rate8 box start 
// let rate8 = document.getElementById('rate8');

// let rate8_array = films.filter((e)=>{
//     return e.rate >= 8;
// })

// window.addEventListener('load', ()=>{
//     rate8_array.forEach(element => {
//         const { img, title, year, url, rate} = element;
//         let card = document.createElement('div');
//         card.classList.add('card');
//         card.innerHTML = `
//         <a href="${url}">
//               <img src="${img}" alt="${title}">
//               <div class="content">
//                 <h5>${title}</h5>
//                 <h6>
//                   <span>${year}</span>
//                   <div class="rate">
//                     <i class="fa-solid fa-heart"></i>
//                     <i class="fa-solid fa-eye"></i>
//                     <i class="fa-solid fa-star"></i>
//                     <h6>${rate}</h6>
//                   </div>
//                 </h6>
//               </div>
//             </a>
//         `
    
//         rate8.appendChild(card); 
//     })
// })
// // film box2 end 

// // btns start 
// let all_btn = document.getElementById('all-btn');

// all_btn.addEventListener('click', ()=>{
//     all_btn.classList.toggle('cato_button_active');
//     all.classList.toggle('box2-actives');
// });

// let latest_btn = document.getElementById('latest-btn');

// latest_btn.addEventListener('click', ()=>{
//     latest_btn.classList.toggle('cato_button_active');
//     latest.classList.toggle('box2-actives');
// });

// let year2022_btn = document.getElementById('year2022-btn');

// year2022_btn.addEventListener('click', ()=>{
//     year2022_btn.classList.toggle('cato_button_active');
//     year_2022.classList.toggle('box2-actives');
// });


let search_bx2 = document.getElementsByClassName('search-bx2')[0];


window.addEventListener('load', ()=>{
    films.forEach(element =>{
        const {img, title, year, url} = element;

        let card = document.createElement('a');
        card.href = url;
        card.innerHTML = `<img src="${img}" alt="">
        <div class="content2">
          <h6>${title}</h6>
          <p>${year}</p>
        </div>`;

        search_bx2.appendChild(card);
    });
});


search.addEventListener('keyup', ()=>{
    let filter = search.value.toUpperCase();
    let a = search_bx2.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
        let b = a[i].getElementsByClassName('content2')[0];
        let c = b.getElementsByTagName('h6')[0];

        let TextValue = c.textContent || c.innerText;
        if (TextValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = '';
            search_bx2.style.visibility = "visible";
            search_bx2.style.opacity = 1;
        } else {
            a[i].style.display = 'none';
        }
        if (search.value == 0 ) {
            search_bx2.style.visibility = "hidden";
            search_bx2.style.opacity = 0;
        }
    }
});
