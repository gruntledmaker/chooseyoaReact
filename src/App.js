import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    text:
      "You've got to take a trip to someplace far, far away. Trains and ships, not planes, are hip. Which will you choose for this, pointedly random excursion?",
    image:
      "https://raw.githubusercontent.com/gruntledmaker/cp2/master/IMG_3285.jpg",
    leftLabel: "Choo-choooooo!",
    rightLabel: "Shlush shlush slush,,,",
    leftPage: "onthetrain",
    rightPage: "ontheship"
  },
  onthetrain: {
    text:
      "Things are movin' now! Make your way to your seat. What's the number?",
    image:
      "https://raw.githubusercontent.com/gruntledmaker/cp2/master/IMG_3284.jpg",
    leftLabel: "12E",
    rightLabel: "97C",
    leftPage: "roomE",
    rightPage: "roomC"
  },
  ontheship: {
    text:
      "Ahoy there matey! Find yer sea legs and get out from over 'em, yar har!",
    image:
      "https://raw.githubusercontent.com/gruntledmaker/cp2/master/IMG_3286.jpg",
    leftLabel: "Stab the pirate and steal her parrot",
    rightLabel: "Politely decline and walk to your cabin",
    leftPage: "attackpirate",
    rightPage: "roomC"
  },
  roomE: {
    text:
      "A shaggy individual with a rather beautiful bird on their shoulder stares into one of your eyes with a vicious, unreadable fury.",
    image:
      "https://raw.githubusercontent.com/gruntledmaker/cp2/master/IMG_3286.jpg",
    leftLabel: "Loosen your hip-knife on this overgrown afterthought!",
    rightLabel: "Flee! You can always find another space to sit",
    leftPage: "attackpirate",
    rightPage: "roomC"
  },
  roomC: {
    text:
      "There doesn't appear to be anyone in sight. Suddenly, the door swings open to reveal you, only partially clothed. Seven of the vessel's on-board SWAT team enter to arrest you. Finally, justice has been brought to Macy-Ann Liebnitz.",
    image:
      "https://raw.githubusercontent.com/gruntledmaker/cp2/master/IMG_3289.jpg",
    leftLabel: "start again!",
    leftPage: "start"
  },
  attackpirate: {
    text:
      "The blade moves from your side to the pirate's in-side faster than a disloyal parrot's squak. But- alas! Incoming footsteps, coming for you!",
    image:
      "https://raw.githubusercontent.com/gruntledmaker/cp2/master/pikachu.png",
    leftLabel:
      "Well, you've got a pretty good pirate accent. If you only had an outfit...",
    rightLabel: "Good thing you're a lifelong fan of 'Weekend at Bernie's!'",
    leftPage: "roomC",
    rightPage: "WEAB"
  },
  gotoroom: {
    text:
      "You politely decline the captain (or whoever they were)'s oddly phrased proposal and go to find your cabin. Which was it...",
    image:
      "https://raw.githubusercontent.com/gruntledmaker/cp2/master/IMG_3288.jpg",
    leftLabel: "Somewhere that way",
    rightLabel: "Oh wait no I think it was that way",
    leftPage: "roomE",
    rightPage: "roomC"
  },
  WEAB: {
    text:
      "A rather disgruntled, mustachioed fella pushes through the doorway, eyeing you and your limp compatriot closely, critically, skeptically. After his judgments begrudge him, he moves quickly on to the next chamber, without a word. You see some more mustachioed folks follow behind him. It seems you'll get to the end of this trip after all.",
    image:
      "https://raw.githubusercontent.com/gruntledmaker/cp2/master/IMG_3290.jpg",
    leftLabel: "start again!",
    rightLabel: "quit while you're ahead",
    leftPage: "start",
    rightPage: "heaven"
  },
  heaven: {
    text:
      "Just because they don't know now, doesn't mean they won't know later. Letting Bernette fall limp onto the floor, you add a sui- to your homicide and rocket out of your body to the platform before the pearly gates. Because he hasn't yet found Bernette's body, St. Kyle greets & welcomes you, the infinite loving light pouring in from the opposite side of the fence. Enjoy it while it lasts, kid.",
    image:
      "https://raw.githubusercontent.com/gruntledmaker/cp2/master/IMG_3291.jpg",
    leftLabel: "start again!",
    rightLabel: "no, really push it",
    leftPage: "start",
    rightPage: "no"
  },
  no: {
    text:
      "You've long forgotten your human life, the infinite force of the burning light having consumed you as a small portion of itself. It is nothing and everything. But dude. You would not have wanted to be there when Kyle found out. It went from nothing to everything in the smallest fraction of a second, and his punishment? The most painful possible. Another life on Earth. What random assemblage of possibilities could you possibly be constructed from this time around?",
    image:
      "https://raw.githubusercontent.com/gruntledmaker/cp2/master/IMG_3287.jpg",
    leftLabel: "start again!",
    leftPage: "start"
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start"
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    var pageData = pages[this.state.page];

    return (
      <div className="App">
        <p>{pageData.text}</p>
        <img src={pageData.image} width="400" alt="page-specific i.mage." />
        <p>
          <button onClick={() => this.goToPage(pageData.leftPage)}>
            {pageData.leftLabel}
          </button>

          <button onClick={() => this.goToPage(pageData.rightPage)}>
            {pageData.rightLabel}
          </button>
        </p>
      </div>
    );
  }
}

export default App;
