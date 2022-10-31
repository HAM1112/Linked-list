const LinkedList = () =>{
    return {
        head: null,


        append(v){
            let newNode = new Node(v)

            if(this.head===null){
                this.head = newNode
            }
            else{
                let tail = this.head
                while(tail.next !== null){
                    tail = tail.next
                }

                tail.next = newNode;
            }
        },

        prepend(v){
            let newNode = new Node(v)

            this.head = newNode
        },

        size(){
            let counter = 0;
            let current = this.head;
            while(current !== null){
                counter++;
                current = current.next
            }
            console.log("size : " , counter);
            return counter
        },

        head(){
            console.log('head : ', this.head);
            return this.head.value;
        },

        tail(){
            let counter = 0;
            let current = this.head;

            while(current !== null){
                counter++;
                current = current.next;
            }
            console.log('tail : ', current);
            return current
        },

        at(index){
            let current = this.head;
            for(i = 0; i < index; i++ ){
                current = current.next
            }

            console.log(`at(${index}) `, current);
            return current
        },

        pop(){
            let current = this.head
            while(current.next.next === null){
                current = current.next
            }
            current.next = null
            console.log("pop() :", current)
            
        },

        


    }
}

const Node = (val = null , nextN = null)=>{
    return {
        value: val,
        nextNode: nextNode,
    }
}
