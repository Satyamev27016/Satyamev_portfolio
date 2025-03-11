// // import React from "react";
// // import GitHubCalendar from "react-github-calendar";
// // import { Row } from "react-bootstrap";

// // function Github() {
// //     return (
// //         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
// //             <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
// //                 Days I <strong className="purple">Code</strong>
// //             </h1>
// //             <GitHubCalendar
// //                 username="Satyamev27016"
// //                 blockSize={15}
// //                 blockMargin={5}
// //                 color="#c084f5"
// //                 fontSize={16}
// //             />
// //         </Row>
// //     );
// // }

// // export default Github;

// import React, { useState, useEffect } from "react";
// import GitHubCalendar from "react-github-calendar";
// import { Row } from "react-bootstrap";

// function Github() {
//     const [latestGitHubDate, setLatestGitHubDate] = useState("");
//     const [latestLeetCodeDate, setLatestLeetCodeDate] = useState("");

//     // Fetch the latest GitHub activity date
//     useEffect(() => {
//         fetch("https://api.github.com/users/Satyamev27016/events")
//             .then((response) => response.json())
//             .then((events) => {
//                 const latestDate = new Date(events[0].created_at);
//                 setLatestGitHubDate(latestDate.toLocaleDateString());
//             })
//             .catch((error) => console.error("Error fetching GitHub data:", error));
//     }, []);

//     // Fetch the latest LeetCode submission date
//     useEffect(() => {
//         fetch("https://leetcode-stats-api.herokuapp.com/Satyamev27016")
//             .then((response) => response.json())
//             .then((data) => {
//                 setLatestLeetCodeDate(data.lastSubmissionDate);
//             })
//             .catch((error) => console.error("Error fetching LeetCode data:", error));
//     }, []);

//     return (
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//             <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
//                 Days I <strong className="purple">Code</strong>
//             </h1>

//             {/* GitHub Contribution Calendar */}
//             <GitHubCalendar
//                 username="Satyamev27016"
//                 blockSize={15}
//                 blockMargin={5}
//                 color="#c084f5"
//                 fontSize={16}
//             />

//             {/* Display Latest Activity Dates */}
//             <div style={{ paddingTop: "20px", textAlign: "center" }}>
//                 <p>
//                     <strong>Last GitHub activity:</strong> {latestGitHubDate}
//                 </p>
//                 <p>
//                     <strong>Last LeetCode submission:</strong> {latestLeetCodeDate}
//                 </p>
//             </div>
//         </Row>
//     );
// }

// export default Github;
