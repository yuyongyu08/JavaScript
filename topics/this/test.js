var beatBox = {
    sample: "gong",
    play: function (sequence) {
        console.log('play:', this);
        sequence.forEach(function (note) {
            console.log('forEach: ', this);

            console.log("Play " + this.sample +
                " for note ", note);
        });
    }
};
beatBox.play(['A', 'C', 'F']);