import { Injectable } from '@nestjs/common';
import { Item } from './item.interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Item[]> {
    return this.prisma.item.findMany();
  }

  async findOne(id: string): Promise<Item> {
    return this.prisma.item.findUnique({
      where: { id },
    });
  }

  async create(itemData: Item): Promise<Item> {
    return this.prisma.item.create({ data: itemData });
  }

  async update(id: string, itemData: Partial<Item>): Promise<Item> {
    return this.prisma.item.update({
      where: { id },
      data: itemData,
    });
  }

  async delete(id: string): Promise<any> {
    return await this.prisma.item.delete({
      where: { id },
    });
  }
}
