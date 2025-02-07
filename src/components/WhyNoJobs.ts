import { appendChildrenToParent } from "../utility/dom-utilities";
import { LeftSidebar } from "./left-sidebar";
import { RightSidebar } from "./right-sidebar";
// import "../styles/WhyNoJobs.css";

export class WhyNoJobs {
  create(): HTMLElement {
    const news = document.createElement("div");
    news.setAttribute("class", "why-no-jobs");

    appendChildrenToParent(
      news,
      new LeftSidebar().create(),
      new WhyNoJobsContent().create(),
      new RightSidebar().create(),
    );

    return news;
  }
}

class WhyNoJobsContent {
  create(): HTMLElement {
    const whyNoJobsContent = document.createElement("div");
    whyNoJobsContent.setAttribute("class", "why-no-jobs-content");

    const whyNoJobsHeader = document.createElement("h2");
    whyNoJobsHeader.classList.add("why-no-jobs-header");
    whyNoJobsHeader.textContent = "អត្ថបទផ្សេងៗ";

    const topicTitle = document.createElement("p");
    topicTitle.classList.add("why-no-jobs-topic-title");
    topicTitle.textContent = "តើហេតុអ្វីសិស្សដែលរៀនជំនាញទាក់ទងនឹងការសរសេរកូដ«coding»មិនអាចរកឱកាសហាត់ការ«internship»ឬ​ឱកាសការងារបាន?";

    const content = document.createElement("p");
    content.classList.add("why-no-jobs-content");
    content.textContent = `
      ដើម្បីក្លាយជាអ្នកអភិវឌ្ឍន៍ អ្នកត្រូវការជំនាញភាសាសរសេរកម្មវិធី (ឧទាហរណ៍ JavaScript, Python, Java), ចំណេះដឹងអំពីរចនាសម្ព័ន្ធទិន្នន័យ និងក្បួនដោះស្រាយ និងបទពិសោធន៍ជាមួយការគ្រប់គ្រងកំណែ (Git)។ អ្នកគួរតែយល់ពីការអភិវឌ្ឍន៍គេហទំព័រ (HTML, CSS, JavaScript) និងមានជំនាញទាំងផ្នែកខាងមុខ (React, Angular) និងផ្នែកខាងក្រោយ (Node.js, Django)។ ភាពស្គាល់ជាមួយមូលដ្ឋានទិន្នន័យ (SQL/NoSQL), ការរចនា API (REST, GraphQL) និងការអនុវត្តការធ្វើតេស្ត (ឯកតា, អាំងតេក្រាស៊ី, E2E) គឺចាំបាច់។ អ្នកក៏ត្រូវការចំណេះដឹងអំពីពពក និង DevOps, ការអនុវត្តល្អបំផុតផ្នែកសន្តិសុខ, ជំនាញដោះស្រាយបញ្ហា និងជំនាញទន់ដូចជាការទំនាក់ទំនង ការសហការ និងការគ្រប់គ្រងពេលវេលា។ លើសពីនេះ ភាពស្គាល់ជាមួយវិធីសាស្រ្តអភិវឌ្ឍន៍ (ឧទាហរណ៍ Agile) និងឧបករណ៍ដូចជា CI/CD និង Docker នឹងជួយអ្នកធ្វើការប្រកបដោយប្រសិទ្ធភាពជាក្រុម។
    `;

    appendChildrenToParent(
      whyNoJobsContent,
      whyNoJobsHeader,
      topicTitle,
      content
    );

    return whyNoJobsContent;
  }
}