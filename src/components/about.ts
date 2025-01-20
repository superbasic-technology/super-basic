import { appendChildrenToParent } from "../utility/dom-utilities";

export class About {
  create(): HTMLElement {
    const about = document.createElement("div");
    about.setAttribute("class", "about");

    const h2 = document.createElement("h2");
    h2.textContent = "Super Basic";

    const intro = document.createElement("div");
    intro.setAttribute("class", "intro");
    const intro_para = document.createElement("p");
    intro_para.textContent = `
      នៅ Super Basic យើងខ្ញុំមានសេចក្តីសោមនស្សរីករាយក្នុងការបំពេញបន្ថែមជំនាញដល់បុគ្គល ដើម្បីឱ្យពួកគេទទួលបានជោគជ័យក្នុងពិភពការងារដែលកំពុងវិវត្តន៍យ៉ាងឆាប់រហ័សនាពេលបច្ចុប្បន្ន។ យើងខ្ញុំផ្តល់ជូននូវកម្មវិធីអប់រំនិងសេវាកម្មដែលមានគុណភាពខ្ពស់ជាច្រើន ដែលត្រូវបានរចនាឡើងដើម្បីជួយអ្នកឱ្យសម្រេចបាននូវគោលដៅផ្ទាល់ខ្លួន និងវិជ្ជាជីវៈរបស់អ្នក។
    `;
    intro.appendChild(intro_para);

    const mission = document.createElement("div");
    mission.setAttribute("class", "mission"); 
    const mission_h3 = document.createElement("h3");
    mission_h3.textContent = `បេសកកម្មរបស់យើង៖`;
    const mission_para = document.createElement("p");
    mission_para.textContent = `
      ផ្តល់នូវការអប់រំដែលងាយស្រួលទទួលបាន និងមានប្រសិទ្ធិភាព ដើម្បីលើកកម្ពស់ភាពច្នៃប្រឌិត និងការរៀនសូត្រពេញមួយជីវិត។ យើងខ្ញុំជឿជាក់លើឥទ្ធិពលនៃការបង្រៀនសិស្សឱ្យមានទំនួលខុសត្រូវ ចេះដោះស្រាយបញ្ហា និងបទពិសោធន៍ជាក់ស្ដែង។
    `;
    appendChildrenToParent(mission, mission_h3, mission_para);

    const courses = document.createElement("div");
    courses.setAttribute("class", "courses");

    const courses_h2 = document.createElement("h2");
    courses_h2.textContent = "អ្វីដែលយើងខ្ញុំផ្តល់ជូន៖";

    const web_development = document.createElement("div");
    const web_development_h3 = document.createElement("h3");
    web_development_h3.textContent = "1. វគ្គហ្វឹកហាត់ Web Development សម្រាប់ការហាត់ការ (Internship)៖";
    const web_development_para = document.createElement("p");
    web_development_para.textContent = `
      ចូលរួមក្នុងកម្មវិធីមួយឆ្នាំពេញដែលបង្រៀនដោយអ្នកជំនាញដែលបានទទួលការបណ្តុះបណ្តាលនៅអឺរ៉ុប។
      ទទួលបានបទពិសោធន៍ជាក់ស្ដែងតាមរយៈការហ្វឹកហាត់ការរយៈពេល ៦ ខែជាមួយក្រុម Developers របស់យើងខ្ញុំផ្ទាល់។
      ជ្រើសរើសរវាងការរៀនជាក្រុម ឬ បុគ្គល ដើម្បីបំពេញតាមរចនាប័ទ្មដែលអ្នកចូលចិត្ត។
    `;
    appendChildrenToParent(web_development, web_development_h3, web_development_para);

    const generative_ai = document.createElement("div");
    const generative_ai_h3 = document.createElement("h3");
    generative_ai_h3.textContent = "2. វគ្គបណ្តុះបណ្តាលស្ដីពីការប្រើប្រាស់បញ្ញាសិប្បនិមិត្ត (Generative AI)៖";
    const generative_ai_para = document.createElement("p");
    generative_ai_para.textContent = `
      ទទួលយកការយល់ដឹងនៃបញ្ញាសិប្បនិមិត្ត (AI) ជាមួយនឹងវគ្គសិក្សារយៈពេលមួយខែរបស់យើងខ្ញុំដែលមានលក្ខណៈទូលំទូលាយ។
      រៀនប្រើប្រាស់ឧបករណ៍ទំនើបៗដូចជា ChatGPT និង Gemini ប្រកបដោយប្រសិទ្ធភាព។
      បង្កើតមូលដ្ឋានគ្រឹះដ៏រឹងមាំលើការប្រើប្រាស់បញ្ញាសិប្បនិមិត្ត។
    `;
    appendChildrenToParent(generative_ai, generative_ai_h3, generative_ai_para);

    const mathematics = document.createElement("div");
    const mathematics_h3 = document.createElement("h3");
    mathematics_h3.textContent = "3. វគ្គគណិតវិទ្យាបំប៉នថ្នាក់ទី1ដល់ថ្នាក់ទី12៖";
    const mathematics_para = document.createElement("p");
    mathematics_para.textContent = `
      ពង្រឹងជំនាញគណិតសាស្ត្ររបស់អ្នកជាមួយនឹងកម្មវិធីរយៈពេលបីខែយ៉ាងម៉ត់ចត់របស់យើងខ្ញុំ។
      បង្រៀនដោយគ្រូបង្រៀនដែលមានបទពិសោធន៍ និងបានទទួលការបណ្តុះបណ្តាលនៅអឺរ៉ុប។
      ជ្រើសរើសរវាងការរៀនជាក្រុម ឬ បុគ្គល ដើម្បីបង្កើនប្រសិទ្ធភាពបទពិសោធន៍ការរៀនសូត្ររបស់អ្នក។
      បង្កើតការយល់ដឹងយ៉ាងរឹងមាំលើគោលគំនិតគណិតសាស្ត្រ។
    `;
    appendChildrenToParent(mathematics, mathematics_h3, mathematics_para);

    const portfolio = document.createElement("div");
    const portfolio_h3 = document.createElement("h3");
    portfolio_h3.textContent = "4. សេវាកម្មបង្កើត Portfolio៖";
    const portfolio_para = document.createElement("p");
    portfolio_para.textContent = `
      បង្ហាញពីការងារ ជំនាញ និងតួនាទីរបស់អ្នកទៅកាន់ពិភពការងារ។
      សេវាកម្មរបស់យើងខផ្តល់ជូនសម្រាប់អ្នកស្វែងរកការងារ និងអ្នកកំពុងមានការងាស្រាប់។
      ទទួលបានអត្ថប្រយោជន៍ពីការធានាកែប្រែរយៈពេលមួយឆ្នាំ។
      រួមបញ្ចូលទាំងការបង្កើត CV ដោយឥតគិតថ្លៃ។
    `;
    appendChildrenToParent(portfolio, portfolio_h3, portfolio_para);

    const conclusion = document.createElement("div");
    const conclusion_para = document.createElement("p");
    conclusion_para.textContent = `
      យើងខ្ញុំរីករាយនឹងផ្តល់នូវបរិយាកាសការរៀនសូត្រដែលមានសីលធម៌ និង ទំនួលខុសត្រូវខ្ពស់។ គ្រូបង្រៀនដែលមានបទពិសោធន៍របស់យើងខ្ញុំ ប្តេជ្ញាជួយអ្នកឱ្យទទួលបានជោគជ័យ។ យើងខ្ញុំផ្តល់អទ្ទិភាពដល់ការរៀនសូត្រជាក់ស្ដែង ការងារជាលក្ខណៈ professional ដើម្បីធានាថាអ្នកទទួលបានជំនាញ និងចំណេះដឹងជាក់ស្ដែងដែលអ្នកត្រូវកា៕
    `;
    appendChildrenToParent(conclusion, conclusion_para);


    appendChildrenToParent(courses, courses_h2, web_development, generative_ai, mathematics, portfolio, conclusion);

    appendChildrenToParent(about, h2, intro, mission, courses);

    return about;
  }
}