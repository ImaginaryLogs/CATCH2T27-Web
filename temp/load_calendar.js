function dcrmtWeekDay(day){
    //7 -> 6 | 4 -> 3 | 1 -> 0 | 0 -> 7
    if (day==0){
        return 7;
    } else {
        return day--;
    }
}

let
week_names = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
week_codes = ["S", "M", "T", "W", "H", "F", "S"];
week_dates = []; // [month, day, year]  <=>  march 2nd, 2024 -> 3,2,2024
curr_week = 0;

overall_content = {
    /*
    month_day_year  <=>  october 2, 2024 -> 10_2_2024 |  march 16, 2029 -> 3_16_2024
    : {
        series_happenings:[
            {end_week_day ##week idx##, title, source, color}
        ]
        
        whole_day_happenings:[
            {title, details, source, color},2
        ]

        composite_happenings:[
            
            {start_time, end_time,title, details, source, color}
            ,
        ],
    }

    */

    _3_13_2024: {
        /*
        series_happenings:[
            {
                end_week_date: 4,
                title: "TESTING TITLE",
                source: "https://www.facebook.com",
                color: "red"
            },
            {
                end_week_date: 5,
                title: "TESTING TITLE2",
                source: "https://www.facebook.com",
                color: "blue"
            }
        ],

        whole_day_happenings:[
            {
                title: "TESTING TITLE3",
                details: "- Fosters friendship and bonds among batchmates by grouping students from different courses, expanding connections and inclusivity.",
                source: "https://www.facebook.com",
                color: "green"
            },
            {
                title: "TESTING TITLE4",
                details: "- Fosters friendship and bonds among batchmates by grouping students from different courses, expanding connections and inclusivity.",
                source: "https://www.facebook.com",
                color: "violet"
            }
        ],
        

        composite_happenings: [
            {
                title: "T2 ILW",
                time: "",
                details: "-Independent Learning Week for DLSU Students",
                source: "",
                color: "#FDE9DF"
            }
        ]
        */
    },

    _3_25_2024: {
        composite_happenings: [
            {
                title: "T2 ILW",
                time: "",
                details: "-Independent Learning Week for DLSU Students",
                source: "",
                color: "#FDE9DF"
            }
        ]
    },
    _3_26_2024: {
        composite_happenings: [
            {
                title: "T2 ILW",
                time: "",
                details: "-Independent Learning Week for DLSU Students",
                source: "",
                color: "#FDE9DF"
            }
        ]
    },
    _3_27_2024: {
        composite_happenings: [
            {
                title: "T2 ILW",
                time: "",
                details: "-Independent Learning Week for DLSU Students",
                source: "",
                color: "#FDE9DF"
            }
        ]
    },
    _3_28_2024: {
        composite_happenings: [
            {
                title: "T2 ILW",
                time: "",
                details: "-Independent Learning Week for DLSU Students",
                source: "",
                color: "#FDE9DF"
            }
        ]
    },
    _3_29_2024: {
        composite_happenings: [
            {
                title: "T2 ILW",
                time: "",
                details: "-Independent Learning Week for DLSU Students",
                source: "",
                color: "#FDE9DF"
            }
        ]
    },
    _3_30_2024: {
        composite_happenings: [
            {
                title: "T2 ILW",
                time: "",
                details: "-Independent Learning Week for DLSU Students",
                source: "",
                color: "#FDE9DF"
            }
        ]
    },
    _4_8_2024: {
        composite_happenings: [
            {
                title: "T2 Finals",
                time: "",
                details: "-Final Examination Week for DLSU Students, Term 2",
                source: "",
                color: "#FDE9DF"
            }
        ]
    },
    _4_9_2024: {
        composite_happenings: [
            {
                title: "T2 Finals",
                time: "",
                details: "-Final Examination Week for DLSU Students, Term 2",
                source: "",
                color: "#FDE9DF"
            }
        ]
    },
    _4_10_2024: {
        composite_happenings: [
            {
                title: "T2 Finals",
                time: "",
                details: "-Final Examination Week for DLSU Students, Term 2",
                source: "",
                color: "#FDE9DF"
            }
        ]
    },
    _4_11_2024: {
        composite_happenings: [
            {
                title: "T2 Finals",
                time: "",
                details: "-Final Examination Week for DLSU Students, Term 2",
                source: "",
                color: "#FDE9DF"
            }
        ]
    },
    _4_12_2024: {
        composite_happenings: [
            {
                title: "T2 Finals",
                time: "",
                details: "-Final Examination Week for DLSU Students, Term 2",
                source: "",
                color: "#FDE9DF"
            }
        ]
    },
    _4_13_2024: {
        composite_happenings: [
            {
                title: "T2 Finals",
                time: "",
                details: "-Final Examination Week for DLSU Students, Term 2",
                source: "",
                color: "#FDE9DF"
            }
        ]
    },
    _4_14_2024: {
        composite_happenings: [
            {
                title: "T2 Finals",
                time: "",
                details: "-Final Examination Week for DLSU Students, Term 2",
                source: "",
                color: "#FDE9DF"
            }
        ]
    },
    _4_15_2024: {
        composite_happenings: [
            {
                title: "T2 Finals",
                time: "",
                details: "-Final Examination Week for DLSU Students, Term 2",
                source: "",
                color: "#FDE9DF"
            }
        ]
    },
    _4_16_2024: {
        composite_happenings: [
            {
                title: "T2 Finals",
                time: "",
                details: "-Final Examination Week for DLSU Students, Term 2",
                source: "",
                color: "#FDE9DF"
            }
        ]
    },
    _4_17_2024: {
        composite_happenings: [
            {
                title: "T2 Trimestal Break",
                time: "",
                details: "-Trimestral Break for DLSU Students, Term 2",
                source: "",
                color: "#FDE9DF"
            },
        ]
    },
    _4_18_2024: {
        composite_happenings: [
            {
                title: "T2 Trimestal Break",
                time: "",
                details: "-Trimestral Break for DLSU Students, Term 2",
                source: "",
                color: "#FDE9DF"
            },
        ]
    },
    _4_19_2024: {
        composite_happenings: [
            {
                title: "T2 Trimestal Break",
                time: "",
                details: "-Trimestral Break for DLSU Students, Term 2",
                source: "",
                color: "#FDE9DF"
            },
            {
                title: "Grade Consultation Day",
                time: "",
                details: "-Grade Consultation Day for DLSU Students, Term 2",
                source: "",
                color: "rgb(203, 233, 223)"
            },
        ]
    },
    _4_20_2024: {
        composite_happenings: [
            {
                title: "T2 Trimestal Break",
                time: "",
                details: "-Trimestral Break for DLSU Students, Term 2",
                source: "",
                color: "#FDE9DF"
            },
        ]
    },
    _4_21_2024: {
        composite_happenings: [
            {
                title: "T2 Trimestal Break",
                time: "",
                details: "-Trimestral Break for DLSU Students, Term 2",
                source: "",
                color: "#FDE9DF"
            },
        ]
    },
    _4_22_2024: {
        composite_happenings: [
            {
                title: "T2 Trimestal Break",
                time: "",
                details: "-Trimestral Break for DLSU Students, Term 2",
                source: "",
                color: "#FDE9DF"
            },
        ]
    },
    _4_23_2024: {
        composite_happenings: [
            {
                title: "T2 Trimestal Break",
                time: "",
                details: "-Trimestral Break for DLSU Students, Term 2",
                source: "",
                color: "#FDE9DF"
            },
        ]
    },
    _4_24_2024: {
        composite_happenings: [
            {
                title: "T2 Trimestal Break",
                time: "",
                details: "-Trimestral Break for DLSU Students, Term 2",
                source: "",
                color: "#FDE9DF"
            },
        ]
    },
    _4_25_2024: {
        composite_happenings: [
            {
                title: "T2 Trimestal Break",
                time: "",
                details: "-Trimestral Break for DLSU Students, Term 2",
                source: "",
                color: "#FDE9DF"
            },
        ]
    },
    _4_26_2024: {
        composite_happenings: [
            {
                title: "T2 Trimestal Break",
                time: "",
                details: "-Trimestral Break for DLSU Students, Term 2",
                source: "",
                color: "#FDE9DF"
            },
        ]
    },
    _4_27_2024: {
        composite_happenings: [
            {
                title: "T2 Trimestal Break",
                time: "",
                details: "-Trimestral Break for DLSU Students, Term 2",
                source: "",
                color: "#FDE9DF"
            },
        ]
    },
    _4_28_2024: {
        composite_happenings: [
            {
                title: "T2 Trimestal Break",
                time: "",
                details: "-Trimestral Break for DLSU Students, Term 2",
                source: "",
                color: "#FDE9DF"
            },
        ]
    },
    _4_29_2024: {
        composite_happenings: [
            {
                title: "T2 Trimestal Break",
                time: "",
                details: "-Trimestral Break for DLSU Students, Term 2",
                source: "",
                color: "#FDE9DF"
            },
        ]
    },
    _4_30_2024: {
        composite_happenings: [
            {
                title: "T2 Trimestal Break",
                time: "",
                details: "-Trimestral Break for DLSU Students, Term 2",
                source: "",
                color: "#FDE9DF"
            },
        ]
    },
    _5_1_2024: {
        composite_happenings: [
            {
                title: "T2 Trimestal Break",
                time: "",
                details: "-Trimestral Break for DLSU Students, Term 2",
                source: "",
                color: "#FDE9DF"
            },
        ]
    },
    

    
    
};

month_names = ["january","february","march","april","may","june","july","august","september","october","november","december"];
month_codes = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


function comp_week_dates(i){
    curr_week += i;
    i = curr_week;
    week_dates = [];
    today = new Date();
    day_distance = today.getDate() - today.getDay();

    for (d=0;d<7;d++){
        week_date = new Date(today);
        week_date.setDate(day_distance+d+(i*7));
        week_month = week_date.getDate();
        month = week_date.getMonth();
        week_dates.push([month+1,week_date.getDate(),week_date.getFullYear()]);        
    }
}

function load_week(element, week){
    console.log(element)
    element.textContent = '';
    console.log(element)
    comp_week_dates(week);
    document.getElementById("week_display").textContent = week_dates[0].join('/') + " - " + week_dates[6].join('/');
    week_head = document.createElement("div");
    week_head.id = "week_head";

    week_body = document.createElement("div");
    week_body.id = "week_body";
    
    today = new Date();

    for (i=0;i<7;i++){
        date = "_" + week_dates[i].join('_');
        date_content = overall_content[date];

        head_day = document.createElement("div");
        head_day.className = "head_day";
        head_day.id = "head_" + week_names[i];

        head_details = document.createElement("div");
        head_details.className = "head_details";

        weekday = week_names[i].split("");
        weekday[0] = weekday[0].toUpperCase();
        weekday = weekday.join("");
        head_day_name = document.createElement("div");
        head_day_name.className = "head_day_name";
        head_day_name.textContent = weekday;

        head_date = document.createElement("div");
        head_date.className = "head_date";
        head_date.textContent = week_dates[i].join('/');

        head_details.appendChild(head_day_name);
        head_details.appendChild(head_date);
        head_day.appendChild(head_details);

        body_day = document.createElement("div");
        body_day.className = "body_day";
        body_day.id = "body_" + week_names[i];
        
        iIsToday = week_dates[i].join("") == [today.getMonth()+1, today.getDate(), today.getFullYear()].join("");

        if (iIsToday){
            head_day.className += " head_today";
            body_day.className += " body_today";
        }

        console.log(date_content);

        if(date_content){
            if(date_content["series_happenings"]){
                console.log("series");
            }

            if(date_content["whole_day_happenings"]){
                console.log("whole day");
            }

            if(date_content["composite_happenings"]){
                for (j=0; j<date_content["composite_happenings"].length;j++){
                    composite_happening = document.createElement("div");
                    composite_happening.className = "composite_happening";

                    composite_happening_title = document.createElement("p");
                    composite_happening_title.className = "composite_happening_title";
                    composite_happening_title.textContent = date_content["composite_happenings"][j].title;

                    composite_happening_time = document.createElement("p");
                    composite_happening_time.className = "composite_happening_time";
                    composite_happening_time.textContent = date_content["composite_happenings"][j].time;

                    composite_happening_details = document.createElement("p");
                    composite_happening_details.className = "composite_happening_details";

                    composite_happening_source = document.createElement("img");
                    composite_happening_source.className = "composite_happening_source";


                    composite_happening.appendChild(composite_happening_title);
                    composite_happening.appendChild(composite_happening_time);
                    composite_happening.appendChild(composite_happening_details);
                    composite_happening.appendChild(composite_happening_source);
                    composite_happening.style.backgroundColor = date_content["composite_happenings"][j].color;
                    
                    body_day.appendChild(composite_happening);
                }
            }
        }

        week_body.appendChild(body_day);
        week_head.appendChild(head_day);
    }
    element.appendChild(week_head);
    element.appendChild(week_body);
}

function load_month(element, month){

}