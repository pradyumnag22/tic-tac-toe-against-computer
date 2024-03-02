const TTT = require("./ttt")

class ComputerPlayer {

  static getValidMoves =(grid) =>{
    let arr = []
    grid.forEach((rows,i) =>{
      rows.forEach((cols,j) =>{
        if(cols === ' '){
          let obj = {"row":i,"col":j}
          arr.push(obj)
        }
      })
    })
    return arr
  }

  static randomMove =(grid) =>{
    let arr = ComputerPlayer.getValidMoves(grid)
    let move = Math.floor(Math.random()*arr.length)
    return arr[move]
  }

  static getWinningMoves(grid, symbol) {

  }

  static getSmartMove = (grid, symbol) =>{

    for(let i=0;i<3;i++){
        if((grid[i][0] === 'O')&&(grid[i][1] === 'O')&&(grid[i][2] === ' ')) return {'row':i,'col':2}
        else if((grid[i][1] === 'O')&&(grid[i][2] === 'O')&&(grid[i][0] === ' ')) return {'row':i,'col':0}
        else if((grid[i][0] === 'O')&&(grid[i][2] === 'O')&&(grid[i][1] === ' ')) return {'row':i,'col':1}
        if((grid[i][0] === symbol)&&(grid[i][1] === symbol)&&(grid[i][2] === ' ')) return {'row':i,'col':2}
        else if((grid[i][1] === symbol)&&(grid[i][2] === symbol)&&(grid[i][0] === ' ')) return {'row':i,'col':0}
        else if((grid[i][0] === symbol)&&(grid[i][2] === symbol)&&(grid[i][1] === ' ')) return {'row':i,'col':1}
    }
    for(let j=0;j<3;j++){
        if(grid[0][j] === 'O' && grid[1][j] === 'O'&&grid[2][j] === ' ') return {'row':2,'col':j}
        else if(grid[0][j] === 'O' && grid[2][j] === 'O'&&grid[1][j] === ' ') return {'row':1,'col':j}
        else if(grid[1][j] === 'O' && grid[2][j] === 'O'&&grid[0][j] === ' ') return {'row':0,'col':j}
        if(grid[0][j] === symbol && grid[1][j] === symbol&&grid[2][j] === ' ') return {'row':2,'col':j}
        else if(grid[0][j] === symbol && grid[2][j] === symbol&&grid[1][j] === ' ') return {'row':1,'col':j}
        else if(grid[1][j] === symbol && grid[2][j] === symbol&&grid[0][j] === ' ') return {'row':0,'col':j}

    }
    if(grid[0][0] === 'O' && grid[1][1] === 'O'&&grid[2][2] === ' ') return {'row':2,'col':2}
    else if(grid[0][0] === 'O' && grid[2][2] === 'O'&&grid[1][1] === ' ') return {'row':1,'col':1}
    else if(grid[1][1] === 'O' && grid[2][2] === 'O'&&grid[0][0] === ' ') return {'row':0,'col':0}
    else if(grid[2][0] === 'O' && grid[1][1] === 'O'&&grid[0][2] === ' ') return {'row':0,'col':2}
    else if(grid[0][2] === 'O' && grid[1][1] === 'O'&&grid[2][0] === ' ') return {'row':2,'col':0}
    else if(grid[2][0] === 'O' && grid[0][2] === 'O'&&grid[1][1] === ' ') return {'row':1,'col':1}
    if(grid[0][0] === symbol && grid[1][1] === symbol&&grid[2][2] === ' ') return {'row':2,'col':2}
    else if(grid[0][0] === symbol && grid[2][2] === symbol&&grid[1][1] === ' ') return {'row':1,'col':1}
    else if(grid[1][1] === symbol && grid[2][2] === symbol&&grid[0][0] === ' ') return {'row':0,'col':0}
    else if(grid[2][0] === symbol && grid[1][1] === symbol&&grid[0][2] === ' ') return {'row':0,'col':2}
    else if(grid[0][2] === symbol && grid[1][1] === symbol&&grid[2][0] === ' ') return {'row':2,'col':0}
    else if(grid[2][0] === symbol && grid[0][2] === symbol&&grid[1][1] === ' ') return {'row':1,'col':1}
    return ComputerPlayer.randomMove(grid)
  }
}

module.exports = ComputerPlayer;
