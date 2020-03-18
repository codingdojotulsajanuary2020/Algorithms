## Week V Day III Algorithms

### Queue - FIFO 


    class Queue():
        def __init__(self):
            self.data = SList()

        def size(self):
            # returns the # of values in the Queue

        def isEmpty(self):
            # return a boolean whether or not the Queue is empty

        def front(self):
            # returns the first value of the Queue

        def enqueue(self, val):
            # adds a new value to the back of the Queue

        def dequeue(self):
            # removes and returns the first value of the Queue
        
    class SLNode():
        def __init__(self, value):
            self.val=value
            self.next=None
    
    class SList():
        def __init__(self):
            self.head=None
            self.tail=None
        def addFront(self, val):
            pass
        def removeFront(self):
            pass
        def addBack(self,val)
            pass
        def removeBack(self):
            pass