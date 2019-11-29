

const Timeline = document.querySelector("#Timeline");


const Course =  {
	date  : [ "09/05","09/06","09/12","09/13","09/19","09/20","09/26","09/27","10/02","10/03","10/09","10/10","10/16","10/17","10/23","10/24","10/30","10/31","11/07","11/08","11/14","11/15","11/21","11/22","11/28","11/29","12/05","12/06","12/12","12/13","12/19","12/20"
	],

	week : [ 1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],

	subject : [ "Introduction & The Internet and World Wide Web", "Basic HTML", "CSS for Styling", "Page Layout", "Basic PHP", "Forms", "Relational Database & SQL", "JavaScript", "DOM", "Prototype & Event", "Ajax & XML & JSON", "Scriptaculous"
	],

	lecture_slide :[
	"https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/00-introduction.html","https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/01-www.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/02-html.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/03-css.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/04-layout.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/05-PHP.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/06-forms.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/07-sql.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/08-javascript.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/09-dom.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/10-prototype.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/11-events.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/12-ajaxXmlJson.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/13-webServices.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/lecture/14-scriptaculous.html" ],

	lab : {
		week : [3,4,5,6,7,9,10,11,12],
		subject : ["Introduction","About Me(HTML)", "CSS", "CSS Design & Layout", "Movie Review(HTML, CSS, Layout)", "Basic PHP", "Forms", "SQL", "JavaScript"],
		lab_slide : ["https://selab.hanyang.ac.kr/courses/cse326/2019/labs/lab0-introduction.html","https://selab.hanyang.ac.kr/courses/cse326/2019/labs/lab1-aboutme(HTML).html", "https://selab.hanyang.ac.kr/courses/cse326/2019/labs/lab3-favorite.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/labs/lab4-movieReview.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/labs/lab5-musicLibrary.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/labs/lab6-gradeStore.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/labs/lab7-SQL.html", "https://selab.hanyang.ac.kr/courses/cse326/2019/labs/lab8-pimpMyText.html"]
	},

	pbl :{
		pbl_project : "Develop a Web Application",
		pbl_project_description : ["Topic: a useful Web application for Software Engineering Laboratory (selab)", "Scope: Renewal of Software Engineering laboratory's web application", "Type: group project - 5 ~ 6 people in a group", "Duration: the entire 2nd semester", "Deliverable: implementation + presentation + report", "Counts towards 30% of the final course grade", "Grade: Topic Selection & Web application Desgin (5%) / Implementation(15%) / Presentation(5%)"],
		pbl_slide : 'https://selab.hanyang.ac.kr/courses/cse326/2019/project/project.html',
		pbl_group : {
				section1 : [
					{
						team_name : "team1",
						leader : "박서연",
						team_member : ["이효원", "정희재", "김재현", "모지환", "황예찬"],
						team_page : "#"
					},
					{
						team_name : "team2",
						leader : "이종민",
						team_member : ["박준영", "박진혁", "송현수", "엄세진", "이준섭"],
						team_page : "#"
					},
					{
						team_name : "team3",
						leader : "김소현",
						team_member : ["임소윤", "이정인", "강가원", "안예진"],
						team_page : "#"
					},
					{
						team_name : "team4",
						leader : "이민혁",
						team_member : ["백승민", "김유현", "Ana Carolina Cardoso", "Zhou Xueyi", "Federik Bonde"],
						team_page : "#"
					},
					{
						team_name : "team5",
						leader : "양재우",
						team_member : ["주한새", "강은호", "권순범", "김하영", "안한서"],
						team_page : "#"
					},
					{
						team_name : "team6",
						leader : "위준범",
						team_member : ["배진우", "박재선", "박성수", "최준호"],
						team_page : "#"
					},
					{
						team_name : "team7",
						leader : "박재용",
						team_member : ["김동규", "이세명", "오승기", "김덕영"],
						team_page : "#"
					},
					{
						team_name : "team8",
						leader : "고동현",
						team_member : ["김동현", "김두호", "왕종휘", "김예진", "문수림"],
						team_page : "#"
					},
					{
						team_name : "team9",
						leader : "성태훈",
						team_member : ["박예찬", "이무경", "장윤호", "심유빈"],
						team_page : "#"
					},
					{
						team_name : "team10",
						leader : "윤규민",
						team_member : ["박제현", "임정현", "윤지인", "이수종"],
						team_page : "#"
					}
				],
				section2 : [
					{
						team_name : "team1",
						leader : "박서연",
						team_member : ["이효원", "정희재", "김재현", "모지환", "황예찬"],
						team_page : "#"
					},
					{
						team_name : "team2",
						leader : "이종민",
						team_member : ["박준영", "박짆격", "송현수", "엄세진", "이준섭"],
						team_page : "#"
					},
					{
						team_name : "team3",
						leader : "김소현",
						team_member : ["임소윤", "이정인", "강가원", "안예진"],
						team_page : "#"
					},
					{
						team_name : "team4",
						leader : "이민혁",
						team_member : ["백승민", "김유현", "Ana Carolina Cardoso", "Zhou Xueyi", "Federik Bonde"],
						team_page : "#"
					},
					{
						team_name : "team5",
						leader : "양재우",
						team_member : ["주한새", "강은호", "권순범", "김하영", "안한서"],
						team_page : "#"
					},
					{
						team_name : "team6",
						leader : "위준범",
						team_member : ["배진우", "박재선", "박성수", "최준호"],
						team_page : "#"
					},
					{
						team_name : "team7",
						leader : "박재용",
						team_member : ["김동규", "이세명", "오승기", "김덕영"],
						team_page : "#"
					},
					{
						team_name : "team8",
						leader : "고동현",
						team_member : ["김동현", "김두호", "왕종휘", "김예진", "문수림"],
						team_page : "#"
					},
					{
						team_name : "team9",
						leader : "성태훈",
						team_member : ["박예찬", "이무경", "장윤호", "심유빈"],
						team_page : "#"
					},
					{
						team_name : "team10",
						leader : "윤규민",
						team_member : ["박제현", "임정현", "윤지인", "이수종"],
						team_page : "#"
					}
				]
			}
	}
};

const make_Timeline = function(){
	const Timeline = document.querySelector("#Timeline");
	let cur_week = 0;
	let lab_count = 0;

	for(i=0;i<Course.date.length;i++){
		const newDiv = document.createElement("div");
		const slot_content = document.createElement("div");
		const slot_contentbox = document.createElement("div");
		const date = document.createElement("h4");
		const subject = document.createElement("h4");
		const lec_note = document.createElement("a");

		const date_text = document.createTextNode(Course.date[i]);
		const subject_text = document.createTextNode(Course.subject[i]);
		const lec_note_text = document.createTextNode("lecture note");

		date.appendChild(date_text);
		subject.appendChild(subject_text);
		lec_note.appendChild(lec_note_text);
		lec_note.href = Course.lecture_slide[i];

		newDiv.classList.add("time_slot");
		slot_content.classList.add("slot_content");
		slot_content.classList.add("class");
		slot_contentbox.classList.add("slot_contentbox");
		date.classList.add("date");
		subject.classList.add("subject");
		lec_note.classList.add("lec_note");


		if(Course.week[i] != cur_week){
			const newWeek = document.createElement("div");
			newWeek.classList.add("time_slot");
			newWeek.classList.add("week_slot");
			
			const week_date = document.createElement("div");
			week_date.appendChild(document.createTextNode(" "));

			const week = document.createElement("h4");
			const week_text = document.createTextNode("week"+Course.week[i]);
			
			const weekbox = document.createElement("div");
			weekbox.classList.add("weekbox");
			weekbox.classList.add("slot_content");

			week.appendChild(week_text);
			week.classList.add("week");

			weekbox.appendChild(week);
			newWeek.appendChild(week_date);
			newWeek.appendChild(weekbox);
			Timeline.appendChild(newWeek);
			// slot_content.appendChild(week);
			cur_week = Course.week[i];

		}

		newDiv.classList.add("week"+cur_week);

		slot_contentbox.appendChild(subject);
		slot_contentbox.appendChild(lec_note);
		slot_content.appendChild(slot_contentbox);
		newDiv.appendChild(date);
		newDiv.appendChild(slot_content);
		Timeline.appendChild(newDiv);

		
		if(cur_week != Course.week[i+1] && Course.lab.week.indexOf(cur_week) >=0){

			const newLab = document.createElement("div");
			const lab_date = document.createElement("div");
			const lab_content = document.createElement("div");
			const lab_contentbox = document.createElement("div");
			const lab_subject = document.createElement("h4");
			const lab_note = document.createElement("a");

			const lab_subject_text = document.createTextNode(Course.lab.subject[lab_count]);
			const lab_note_text = document.createTextNode("lab note");

			lab_date.appendChild(document.createTextNode(" ")); 
			lab_subject.appendChild(lab_subject_text);
			lab_note.appendChild(lab_note_text);

			lab_note.href=Course.lab.lab_slide[lab_count];

			lab_content.classList.add("slot_content");
			lab_contentbox.classList.add("slot_contentbox");
			newLab.classList.add("time_slot");
			newLab.classList.add("week"+cur_week);


			lab_contentbox.appendChild(lab_subject);
			lab_contentbox.appendChild(lab_note);
			lab_content.appendChild(lab_contentbox)
			newLab.appendChild(lab_date);
			newLab.appendChild(lab_content);
			Timeline.appendChild(newLab);
			lab_count++;
		}

	}
};

const focusOn = function(){
	const cur_week = 5;
	const timeline = document.querySelector("#Timeline")
	const timeslot = document.querySelectorAll(".time_slot");
	const curweek_slot = document.querySelectorAll(".week"+cur_week);

	timeline.classList.add('focus');

	timeslot.forEach((element)=>{
		element.classList.add("deselected");
	});

	curweek_slot.forEach((element)=>{
		element.classList.remove("deselected");
		element.classList.add("selected");
	});
}

const focusOut = function(){
	const timeline = document.querySelector("#Timeline");
	const timeslot = document.querySelectorAll(".time_slot.deselected");


	timeline.classList.remove('focus');
	timeslot.forEach((element)=>{
		element.classList.remove("deselected");
		element.classList.add("selected");
	});

}


document.querySelector("#timeline_btn").addEventListener('click',()=>{
	const timeline =document.querySelector("#Timeline");

	if(timeline.classList.contains('focus')){
		focusOut();
	}
	else {
		focusOn();
	}
});
