function getNewIdeas() {
	
    var ideas = [];

    // Near uninspired
    ideas.push(getIdeasFromCustomers());

    // Far impractical
    ideas.push(getIdeasFromBrainstorming());

     // Sweet spot
    ideas.push(getIdeasBySIT());

    return ideas;
}