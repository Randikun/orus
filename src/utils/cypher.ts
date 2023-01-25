import { createHash, Hash } from 'crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Cypher {
  encryptSHA256(text: string): string {
    const hash: Hash = createHash('sha256');
    hash.update(text);
    return hash.digest('hex');
  }
}
