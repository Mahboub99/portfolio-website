import a1 from "../images/Projects-logos/Oud.svg";
import a2 from "../images/Projects-logos/A4A.svg";
import a3 from "../images/Projects-logos/SpaceTrippers.svg";
import a4 from "../images/Projects-logos/GeometryAttack.svg";
import a5 from "../images/Projects-logos/BlobbyVolley.svg";
import a6 from "../images/Projects-logos/ResturantSimulator.svg";
import a7 from "../images/Projects-logos/PaintForKids.svg";
import a8 from "../images/Projects-logos/AlgoBrain.svg";

import b1 from "../images/Projects-Demos/Oud.png";
import b2 from "../images/Projects-Demos/A4A.png";
import b3 from "../images/Projects-Demos/SpaceTrippers.png";
import b4 from "../images/Projects-Demos/GeometryAttack.png";
import b5 from "../images/Projects-Demos/BlobbyVolley.png";
import b6 from "../images/Projects-Demos/ResturantSimulator.png";
import b7 from "../images/Projects-Demos/PaintForKids.png";
import b8 from "../images/Projects-Demos/AlgoBrain.png";

const ProjectsArr = [
  {
    key: "1",
    id: "1",
    name: "OUD",
    discreption:
      "🎵 The frontend of Oud, an online music streaming service which is a mimic of Spotify with all its functionalities built using ReactJS, React-Router, Bootstrap.",
    photoLogo: a1,
    photoDemo: b1
  },
  {
    key: "2",
    id: "2",
    name: "A4A",
    discreption:
      "📊 Competitive programming website to manage competitive programming activities with a virtual judge.",
    photoLogo: a2,
    photoDemo: b2
  },
  {
    key: "3",
    id: "3",
    name: "SpaceTrippers",
    discreption:
      "🤖 🚀 A 3D space game. Traveling along the space trying to avoid rocks and obstacles. The ship can avoid the rocks by moving right, or left. Collision with the rocks affects its health by decreasing total health by ONE and every second with no collision with the rock your score increase by ONE.",
    photoLogo: a3,
    photoDemo: b3
  },
  {
    key: "4",
    id: "4",
    name: "Gemotry Attack 86",
    discreption:
      "🔘🔲💠 kid learning game in which the kid learn the shapes in an exciting survival game",
    photoLogo: a4,
    photoDemo: b4
  },
  {
    key: "5",
    id: "5",
    name: "Blobby Volley",
    discreption:
      "⚾️ It is the well-known game named Blobby Volley coded in assembly language with x86 instruction set, 8086 version. The game can be played in multiplayer mode using UART serial communication through the dos emulator DOSBox with two modes the Play mode and the Chat mode in which you can talk with the other player.",
    photoLogo: a5,
    photoDemo: b5
  },
  {
    key: "6",
    id: "6",
    name: "Resturant Simulator",
    discreption:
      "🛵 Resturant Simulator is delivery system which manage the process of receiving the orders and deliver it to the customer",
    photoLogo: a6,
    photoDemo: b6
  },
  {
    key: "7",
    id: "7",
    name: "Paint For Kids",
    discreption:
      "Paint-For-Kids Project ❤️🔥 fully coded using C++,C as a Project for Object Oriented Course",
    photoLogo: a7,
    photoDemo: b7
  },
  {
    key: "8",
    id: "8",
    name: "AlgoBrain",
    discreption:
      "♟ It is research project implemnted in c++ . Our problem is that how to obtain the attack set of the next move for sliding pieces (queen, bishop and rock) in computer chess engines. But why sliding pieces? The answer is that sliding pieces have so many combinations to be considered. In this paper we will make a comparison between the classical approach to obtain that and the magic bitboard approach and we will provide the reader with C++ implementation for the magic approach as we aim to provide programmers who write chess engines a discussion of one of the fastest and most versatile movebitboard generators for individual sliding pieces",
    photoLogo: a8,
    photoDemo: b8
  }
];
export default ProjectsArr;
