export default {
    111: {
        initialValue: `
        Feature: Serve coffee
          As a coffee lover
          I can get coffee from the machine
          So I can enjoy the rest of the day
        
        Scenario: Simple use
        # Well, sometimes, you just get a coffee.
          Given the coffee machine is started
          When I take a coffee
          Then coffee should be served
          And message "Please take your coffee" should be printed`,
        steps: [
            'I start the coffee machine using language "lang"',
            'I shutdown the coffee machine',
            'message "message" should be displayed'
        ],
        usageFrequency: 3,
        visibility: 4,
        complexity: 5,
        turnOver: 6,
        geography: 8

    },
    112: {
        initialValue: `
        Feature: Serve Tea
          As a tea lover
          I can get tea from the machine
          So I can enjoy the rest of the day
        
        Scenario: Simple use
          # Well, sometimes, you just get a tea.
          Given the tea machine is started
          When I take a tea
          Then tea should be served
          And message "Please take your tea" should be printed`,
        steps: [
            'I start the tea machine using language "lang"',
            'I shutdown the tea machine',
            'message "message" should be displayed'
        ],
        usageFrequency: 4,
        visibility: 6,
        complexity: 1,
        turnOver: 5,
        geography: 3

    },
}