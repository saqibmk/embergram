import Ember from 'ember';
const {get} = Ember;
export default Ember.Route.extend({
  actions: {
    createPost(postTitle){
      let uid = get(this, 'session.uid');
      let post = this.store.createRecord('post', {
        imageURL: 'http://www.helpinghomelesscats.com/images/cat1.jpg',
        caption: postTitle
      });

      this.store.query('user', {orderBy: 'uid', equalTo: uid }).then((records) => {
        let user = records.get('firstObject');

          user.get('posts').addObject(post);
          post.save().then(()=> {
            return user.save();
          });

          this.transitionTo('feed');
      });


    }
  }
});
