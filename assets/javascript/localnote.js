function Note( title, content) {
    this.title = title;
    this.content = content;
    this.dateCreated = new Date().toLocaleDateString();
    this.dateModified = this.dateCreated;
    save = function() {
        localStorage.setItem( id, JSON.stringify(this) );
    }
}

$(document).ready( function() {
    //Everything will start when document is fully loaded

    var note = new Note( 'My First Note', ['Line 1', 'Line 2. Other line', 'Line 3. The last line'] );
    note.save();
});