news_index = 0;

source_color = {
    DLSU_USG:"rgb(0, 52, 36)",
    DLSU_CSG:"rgb(15, 118, 92)",
    CATCH2T27:"#4c2150"
}

const news_list = [
    //pinned >> first 3 news
    {
    title:"ONLINE ENROLLMENT SCHEDULE AND PROCEDURES",
    what:"You may now view the schedule and procedures for the upcoming enrollment for Term 3 A.Y. 2023-2024",
    when:"",
    link:"https://www.facebook.com/dlsu.usg/posts/pfbid02pBvHnpn18PKtcuw7AX2weGGDEeKoqRrF5MZ1MHtmb49vRtTTz3HEh8PqLA9JVRJLl",
    source:"DLSU USG",
    main_image:"https://catch2t27.com/images/dlsu_usg_10.jpeg"
    },
    
    {
    title:"SETTLEMENT OF CLEARANCE",
    what:"Please be reminded to check your clearance status on or before April 13, 2024 to avoid any holds for the upcoming enlistment.",
    when:"April 13, 2024",
    link:"https://www.facebook.com/dlsu.usg/posts/pfbid0i9McTUycVc1Y2FxhYtAJVdpV1QZfwugk9uuz2gq1VMVv37qrYTWShJ2Eq6CBNsV1l",
    source:"DLSU USG",
    main_image:"https://catch2t27.com/images/dlsu_usg_11.jpeg"
    }, 

    {
    title:"DEADLINE FOR 3/3 INSTALLMENT PAYMENTS",
    what:"For Term 1 Outstanding Balance, you may pay directly at the cashiers, online banking, or OTC banks",
    when:"April 6, 2024",
    link:"https://www.facebook.com",
    source:"DLSU USG",
    main_image:"https://catch2t27.com/images/dlsu_usg_2.jpeg"
    },

    {
    title:"CCS DIRECTORY",
    what:"Collects data froma all CCS Students, enhancing the Student Services team's ability to offer more supports.",
    when:"March 18, 2024",
    link:"https://www.facebook.com/DLSU.CSG/posts/pfbid09z9isjggkhUytCUVpWNGUxAzSXwFL5oxZd2ayWoYaG7H67YrecpQVrBBd8JaaCGMl",
    source:"DLSU CSG",
    main_image:"https://catch2t27.com/images/dlsu_csg_0.jpeg"
    }, 

    {
    title:"ILW & HOLY WEEK GUIDELINES",
    what:"",
    when:"",
    link:"https://www.facebook.com/DLSU.CSG/posts/pfbid09z9isjggkhUytCUVpWNGUxAzSXwFL5oxZd2ayWoYaG7H67YrecpQVrBBd8JaaCGMl",
    source:"DLSU USG",
    main_image:"https://catch2t27.com/images/dlsu_usg_8.jpeg"
    },
    
    {
    title:"EXTRA ALLOWANCE PROGRAM",
    what:"Funded by PUSO, for students looking for financial support. This program is open to all students and offers assistance for one term.",
    when:"March 18-29, 2024",
    link:"https://www.facebook.com/dlsu.usg/posts/pfbid02afLyabUCtSmyw88EeP24qG4m93CKTUhfM1RZtZi4bgd8syHWt1T7fjCAadb7YHB6l",
    source:"DLSU USG",
    main_image:"https://catch2t27.com/images/dlsu_usg_0.jpeg"
    },

    {
    title:"BOSES MO, LAKAS MO: Interest Check",
    what:"Encourages YOU to share YOUR ideas for future projects under the USG. May it be for performances, workshops, advocacies or any event.",
    when:"March 19, 2024",
    link:"https://www.facebook.com",
    source:"DLSU USG",
    main_image:"https://catch2t27.com/images/dlsu_usg_7.jpeg"
    },

    {
    title:"3-POINT SUBSIDY PROGRAM",
    what:"provides financial assistance to Lasallians (ID 123 and below), aiming to assist students with the increasing costs of public transportation, data needs for hybrid learning, and providing financial support to our athletes.",
    when:"March 18-23, 2024",
    link:"https://www.facebook.com",
    source:"DLSU USG",
    main_image:"https://catch2t27.com/images/dlsu_usg_1.jpeg"
    },

    {
    title:"WEEK 13 QUIZZES",
    what:"The Office of the Provost would like to announce that instructors have the option to conduct quizzes during Week 13, scheduled from April 1 to 6, for this trimester.",
    when:"April 1-16, 2024",
    link:"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdlsu.usg%2Fposts%2Fpfbid025dSLAJgwEYA47zqtc6g3WBqQifTuQ8RzqfndoUwMep6vp7KNgknuhEnVQ6G1AsuSl&show_text=true&width=500",
    source:"DLSU USG",
    main_image:"https://catch2t27.com/images/dlsu_usg_9.jpeg"
    },
 
    {
    title:"WOMEN'S ESSENTIAL KIT DISTRIBUTION",
    what:"Aims to uplift women by distributing essential kits designed to cater to their unique needs at the Yuchengco Cave on March 20 & 22, 2024 from 10:00 AM",
    when:"March 20 & 22, 2024",
    link:"https://www.facebook.com/photo/?fbid=806388938194500&set=a.459441076222623",
    source:"DLSU USG",
    main_image:"https://catch2t27.com/images/dlsu_usg_4.jpeg"
    },

    {
    title:"STATE OF STUDENT GOVERNANCE",
    what:"The 14th University Student Government’s first State of Student Governance (SSG) happened on March 20, Wednesday, 3:00 PM at the Most Blessed Sacrament Chapel, St. La Salle Hall.",
    when:"March 20, 2024",
    link:"https://www.facebook.com/story.php?story_fbid=806373131529414&id=100064702025550",
    source:"DLSU USG",
    main_image:"https://catch2t27.com/images/dlsu_usg_3.jpeg"
    },

    {
    title:"ANIMO SKILLSPRINT: CAREER KICKSTART",
    what:"Learn tips and tricks on what recruiters are looking for straight from a recruiter on March 20, 2:00-4:00PM at the USG Office, 3rd Floor, Br. Connon Hall",
    when:"March 20, 2024",
    link:"https://www.facebook.com/share/p/NcMV2TiQDLzAF5ci/?mibextid=WC7FNe",
    source:"DLSU USG",
    main_image:"https://catch2t27.com/images/dlsu_usg_5.jpeg"
    },


    {
    title:"HEAL SEMINAR 1",
    what:"Health Empowerment and Access for Lasallians (HEAL) program's STI Basics seminar with Denis Cruz and LoveYourselfPH will be held from 3-5PM in Gokongwei 105-106.",
    when:"March 22, 2024",
    link:"https://www.facebook.com/story.php?story_fbid=808023681364359&id=100064702025550&mibextid=ox5AEW",
    source:"DLSU USG",
    main_image:"https://catch2t27.com/images/dlsu_usg_6.jpeg"
    },
];


function load_news(news, i){
    //initialize ID and Class
    news_content = document.createElement("div");
    news_content.id="news_" + i;
    news_content.className = "news_content";
    news_bgcolor = source_color[news_list[i].source.split(" ").join("_")];
    news_content.style = "background-image: linear-gradient(to top right, #FDE9DF,#FDE9DF,"+news_bgcolor+");";
    console.log(news_content.style.backgroundColor, );
    news_content_head = document.createElement("div");
    news_content_head.className = "news_content_head";

    //HEAD ELEMENTS

    //Source
    news_content_source = document.createElement("div");
    news_content_source.className = "news_content_source";
    
    news_content_source_img = document.createElement("img");
    news_content_source_img.src = "https://catch2t27.com/images/"+news_list[i].source+"_small.png";
    news_content_source_img.className = "news_content_source_img";

    news_content_source_name = document.createElement("p");
    news_content_source_name.textContent = news_list[i].source;
    news_content_source_name.className = "news_content_source_name";

    news_content_source.appendChild(news_content_source_img);
    news_content_source.appendChild(news_content_source_name);
    news_content_head.appendChild(news_content_source);
    

    //link
    if (news_list[i].link){
        news_content_link = document.createElement("a");
        news_content_link.href = news_list[i].link;
        news_content_link.target = "_blank";
        news_content_link.className = "redirect_link";

        news_content_link_img = document.createElement("img");
        news_content_link_img.src = "https://catch2t27.com/images/redirect_icon.png";
        news_content_link_img.className = "redirect_icon";

        news_content_link.appendChild(news_content_link_img);
        news_content_head.appendChild(news_content_link);
    }
    news_content.appendChild(news_content_head);
    
    //TITLE
    news_content_title = document.createElement("h1");
    news_content_title.className = "news_content_title"
    news_content_title.textContent = news_list[i].title;
    news_content.appendChild(news_content_title);


    //DETAIL ELEMENTS
    news_content_details = document.createElement("div");
    news_content_details.className = "news_content_details"
    
    //when
    if (news_list[i].when){
        news_content_when = document.createElement("p");
        news_content_when.textContent = news_list[i].when;
        news_content_when.className = "news_content_when mid";
        news_content_details.appendChild(news_content_when);
    }

    //what
    if (news_list[i].what){
        news_content_what = document.createElement("p");
        news_content_what.textContent = "- " + news_list[i].what;
        news_content_details.appendChild(news_content_what);
    }

    //main image
    if (news_list[i].main_image){
        news_content_img = document.createElement("img");
        news_content_img.src = news_list[i].main_image;
        news_content_img.className = "news_content_main_img";
        news_content_details.appendChild(news_content_img);
    }




    news_content.appendChild(news_content_details);
    news.appendChild(news_content);
}

function load_batched_news(news){
    count = 3;
    for (i=news_index; i<news_list.length && count>0;i++){
        load_news(news, i);
        count--;
        news_index++;
    }
    if (news_index >= news_list.length){
        document.getElementById("next_button").style = "display:none";
    }
}

