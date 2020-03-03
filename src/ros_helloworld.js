const rosnodejs = require('rosnodejs');
rosnodejs.loadAllPackages();

rosnodejs.initNode('/my_node')
.then(() => {
    const nh = rosnodejs.nh;
    const sub = nh.subscribe('/hello', 'std_msgs/String', (msg) => {
      console.log('Got msg on chatter: %j', msg);
    });
});