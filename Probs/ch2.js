

const deleteMidNode = midNode => {

	let next = midNode.next;

	//delete this node by setting this node's data to the next node, and deleting the next node
	midNode.data = next.data;
	midNode.next = next.next;


	console.log(midNode);
	return true;
}

// deleteMidNode(mynode);