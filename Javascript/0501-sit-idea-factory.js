function createNewProducts(existingProduct) {

    var ideas, closedWorldItems, systemVariables, thinkingTools, virtualProducts, virtualProduct, tt, vp;

    ideas = [];
    closedWorldItems = getClosedWorldComponents(existingProduct);
    thinkingTools = getThinkingTools();
    systemVariables = getSystemVariables();

    for (tt = 0; tt < thinkingTools.length; tt++) {
        virtualProducts = applyTool(thinkingTools[tt], closedWorldItems, systemVariables);

        for (vp = 0; vp < virtualProducts.length; vp++) {
            virtualProduct = virtualProducts[vp];

            if ((virtualProduct.solvedExistingProblem
                || virtualProduct.hasMarketBenefits
                || virtualProduct.hasMarketAdvantages)
                && virtualProduct.isFeasible) {
                    ideas.push(virtualProduct);
                }
            }
        }
    }
    
    return ideas;
}