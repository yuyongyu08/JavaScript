/*
JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。
完善下面代码的Scheduler类，使以下程序能够正常输出：
class Scheduler {
  add(promiseCreator) { ... }
  // ...
}
   
const timeout = time => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  }
})
  
const scheduler = new Scheduler()
  
const addTask = (time,order) => {
  scheduler.add(() => timeout(time).then(()=>console.log(order)))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')

// output: 2 3 1 4
整个的完整执行流程：

起始1、2两个任务开始执行
500ms时，2任务执行完毕，输出2，任务3开始执行
800ms时，3任务执行完毕，输出3，任务4开始执行
1000ms时，1任务执行完毕，输出1，此时只剩下4任务在执行
1200ms时，4任务执行完毕，输出4
*/

class Scheduler {
  constructor(maxCount) {
    this.queue = [];
    this.maxCount = maxCount;
    this.runningCount = 0;
  }
  add(promiseCreator) {
    this.queue.push(promiseCreator);
    this.runTask();
  }

  runTask() {
    if (this.queue.length > 0 && this.runningCount < this.maxCount) {
      const task = this.queue.shift();
      this.runningCount++;
      task().then(() => {
        this.runningCount--;
        this.runTask();
      });
    }
  }

  async addAsync(promiseCreator) {
    // 用来设置阻塞（resolve不被执行，await后面的就不会加入到任务队列）
    if (this.runningCount >= this.maxCount) {
      await new Promise((resolve) => this.queue.push(resolve));
    }

    this.runningCount++;
    await promiseCreator();
    this.runningCount--;

    // 打开一个阻塞
    this.queue.length && this.queue.shift()();
  }
}

const scheduler = new Scheduler(2);

function task(delay, msg) {
  return () =>
    new Promise((res, rej) => {
      setTimeout(() => {
        console.log(msg);
        res(msg);
      }, delay);
    });
}

const t1 = task(1000, "1");
const t2 = task(500, "2");
const t3 = task(300, "3");
const t4 = task(400, "4");

// scheduler.add(t1);
// scheduler.add(t2);
// scheduler.add(t3);
// scheduler.add(t4);

scheduler.addAsync(t1);
scheduler.addAsync(t2);
scheduler.addAsync(t3);
scheduler.addAsync(t4);
