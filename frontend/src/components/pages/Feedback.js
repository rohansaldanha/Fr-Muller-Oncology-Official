// import React, { useState } from "react";
// import SimpleFeedback from "react-simple-feedback";
// import { Text } from "@nextui-org/react";
// import { Textarea, Grid } from "@nextui-org/react";

// function Feedback() {
//     const [findings, setFindings] = useState("");
//     const [imaging, setImaging] = useState("");
//     const [biopsy, setBiopsy] = useState("");
  
//     const handleFindingsChange = (e) => {
//       setFindings(e.target.value);
//     };
  
//     const handleImagingChange = (e) => {
//       setImaging(e.target.value);
//     };
  
//     const handleBiopsyChange = (e) => {
//       setBiopsy(e.target.value);
//     };
  
//     return (
//       <div>
//         <Text
//           h1
//           size={30}
//           css={{
//             textGradient: "45deg, $blue600 -20%, $pink600 50%"
//           }}
//           weight="bold"
//         >
//           PAIN ASSESSMENT
//         </Text>
  
//         <SimpleFeedback
//           label="WONG BAKER SCALE"
//           onClose={() => window.location.reload()}
//           tags={[
//             {
//               value: 0,
//               emoji: "😊",
//               label: "1"
//             },
//             {
//               value: 1,
//               emoji: "🙂",
//               label: "2"
//             },
//             {
//               value: 2,
//               emoji: "😐",
//               label: "3"
//             },
//             {
//               value: 4,
//               emoji: "🙁",
//               label: "4"
//             },
//             {
//               value: 5,
//               emoji: "😢",
//               label: "5"
//             }
//           ]}
//         />
  
//         <Grid.Container gap={1}>
//           <Grid>
//             <Textarea
//               label="Clinical Findings"
//               rows={5}
//               cols={90}
//               value={findings}
//               onChange={(e) => {
//                 handleFindingsChange(e);
//               }}
//             />
//           </Grid>
  
//           <Text
//             h1
//             size={25}
//             css={{
//               textGradient: "45deg, $blue600 -20%, $pink600 50%"
//             }}
//             weight="bold"
//           >
//             Investigations
//           </Text>
  
//           <Grid>
//             <Textarea
//               value={imaging}
//               label="Imaging"
//               rows={5}
//               cols={90}
//               required
//               onChange={(e) => {
//                 handleImagingChange(e);
//               }}
//             />
//           </Grid>
  
//           <Grid>
//             <Textarea
//               value={biopsy}
//               label="Biopsy"
//               rows={5}
//               cols={90}
//               required
//               onChange={(e) => {
//                 handleBiopsyChange(e);
//               }}
//             />
//           </Grid>
//         </Grid.Container>
//       </div>
//     );
// }

// export default Feedback;
