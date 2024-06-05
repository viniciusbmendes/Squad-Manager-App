import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

interface Player {
  nickname: string;
  class: string;
}

export const readCSV = (filePath: string): Promise<Player[]> => {
  const players: Player[] = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(path.resolve(__dirname, filePath))
      .pipe(csv({ headers: ['nickname', 'class'] }))
      .on('data', (row) => {
        players.push({
          nickname: row.nickname,
          class: row.class,
        });
      })
      .on('end', () => {
        resolve(players);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};
