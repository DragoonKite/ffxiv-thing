characterData = [];

fetch("https://xivapi.com/character/7596684?data=AC,FR,FC", { mode: 'cors' }).then(function(response){
    if(response.ok){
        response.json().then(function(data){
        characterData = data;
        console.log(characterData);
        $("#characterName").html(data.Character.Name +"<img src=" + data.Character.Portrait + "width='300' height='400'/>" + data.Character.ActiveClassJob.UnlockedState.Name + " Lv:" + data.Character.ActiveClassJob.Level);
        $("#nameDay").html(data.Character.Nameday);
        $("#freeCompany").html(data.Character.FreeCompanyName + "<img src=" + data.FreeCompany.Crest[2] +" alt='Free Company Crest'/>");
        }) 
    }
});

$("#jobs").on("click", function(){
    event.preventDefault();
    $("#variable-info").empty();

    var jobContainer = $("<div>");
    jobContainer.attr('id', 'job-container');
    jobContainer.addClass('row d-flex');

    for(var i=0; i <characterData.Character.ClassJobs.length; i++){
        var cardContainer = $("<div>")
        cardContainer.addClass('col-4')

        var jobCard = $("<div>")
        jobCard.addClass('card style="width: 18rem;"')
        jobCard.attr('id', characterData.Character.ClassJobs[i].UnlockedState.Name)
        jobCard.html("<span>Class: " + characterData.Character.ClassJobs[i].UnlockedState.Name + "</span><span> Level: " + characterData.Character.ClassJobs[i].Level + "</span>");

        cardContainer.append(jobCard)
        jobContainer.append(cardContainer);
    };

    $("#variable-info").append('<h2>Jobs</h2>', jobContainer);
})

$("#mounts").on("click", function(){
    event.preventDefault();
    $("#variable-info").empty();

    var mountContainer = $("<div>");
    mountContainer.attr('id', 'mount-container');
    mountContainer.addClass('row d-flex');

    for(var i=0; i <characterData.Mounts.length; i++){
        var cardContainer = $("<div>")
        cardContainer.addClass('col-2')

        var mountCard = $("<div>")
        mountCard.addClass('card style="width: 9rem;"')
        mountCard.attr('id', characterData.Mounts[i].Name)
        mountCard.html("<img class='card-img-top' src=" + characterData.Mounts[i].Icon + " alt=" + characterData.Mounts[i].Name + " ><div class='card-body'><p class='card-text'>" + characterData.Mounts[i].Name + "</p></div>");

        cardContainer.append(mountCard)
        mountContainer.append(cardContainer);
    };

    $("#variable-info").append('<h2>Mounts</h2>', mountContainer);
})

$("#minions").on("click", function(){
    event.preventDefault();
    $("#variable-info").empty();

    var minionContainer = $("<div>");
    minionContainer.attr('id', 'minion-container');
    minionContainer.addClass('row d-flex');

    for(var i=0; i <characterData.Minions.length; i++){
        var cardContainer = $("<div>")
        cardContainer.addClass('col-2')

        var minionCard = $("<div>")
        minionCard.addClass('card style="width: 9rem;"')
        minionCard.attr('id', characterData.Minions[i].Name)
        minionCard.html("<img class='card-img-top' src=" + characterData.Minions[i].Icon + " alt=" + characterData.Minions[i].Name + " ><div class='card-body'><p class='card-text'>" + characterData.Minions[i].Name + "</p></div>");

        cardContainer.append(minionCard)
        minionContainer.append(cardContainer);
    };

    $("#variable-info").append('<h2>Minions</h2>', minionContainer);
})