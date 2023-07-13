'use strict';

function processOrderList(orderList, orderId, state) {
    // Write code here
    return state === 'Processing' ?
      orderList.map(item => ({
        ...item,
        state: item.id === orderId ? 'Processing' : item.state
      })) :
      orderList.filter(item => item.id !== orderId);
}
