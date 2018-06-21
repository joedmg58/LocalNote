
var note = {
    title: '',
    content: [],
    created: '', //new Date().toLocaleDateString(),
    modified: ''
};

function saveNote( arr, item ) {
    arr.push( item );
    localStorage.setItem( 'localNotes', JSON.stringify( arr ) );
}

function showNotes( notes ) {
    for ( var i = 0; i < notes.length; i++ ) {
        //create a column
        var col = $('<div class="col-sm-3">');
        //append a column to a row
        col.appendTo( $('#notesContainer') );
        //create a card
        var card = $('<div class="card shadow">');
        //append a card to a column
        card.appendTo( col );
        //create card's title, cards's content and card's footer
        var cardBody = $('<div class="card-body">');
        cardBody.appendTo( card );
        cardBody.append( $('<h5 class="card-title">').text( notes[i].title) );
        cardBody.append( $('<h6 class="card-subtitle mb-2 text-muted">').text( 'Created on: ' + notes[i].created ) );
        for ( var j = 0; j < notes[i].content.length; j++ ) {
            cardBody.append( $('<p class="card-text">').text( notes[i] .content[j]) );
        }
        //append all of these to a card
    }
}

/*
function Note( title, content) {
    this.id = this.getId();
    this.title = title;
    this.content = content;
    this.dateCreated = new Date().toLocaleDateString();
    this.dateModified = this.dateCreated;
    this.getId = function() {
        var noteCount = Object.keys( localStorage ).length;
        return 'localNote'+noteCount;
    }
    this.save = function() {
        var n = new Object({ 'title': this.title,
                             'content': this.content,
                             'created': this.dateCreated,
                             'modified': this.dateModified });
        localStorage.setItem( this.id, JSON.stringify( n ) );
    }
}
*/



$(document).ready( function() {
    //Everything will start when document is fully loaded

    var notes = JSON.parse( localStorage.getItem('localNotes') );

    if ( !Array.isArray( notes ) ) { notes = []; }

    //Load and show all the notes stored on localStorage
    showNotes( notes );

    /*
    note.title = 'FJ Note';
    note.content = ['Sleep early','Sleep tight','Wake up early when dad wakes you up','Be quiet on the van on the way to daycare'];
    note.created = new Date().toLocaleString();
    note.modified = note.created;
    saveNote( notes, note );
    */
    
});