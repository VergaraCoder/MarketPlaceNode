import { DataSource, Repository } from 'typeorm'
import { Seeder } from 'typeorm-extension'
import { PriceMode } from '../../../domain/models/priceMode.model.ts'
import { DataPriceMode } from '../../../utils/priceMode/dataPriceMode.ts'

export class SeederPriceMode implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const repoPriceMode: Repository<PriceMode> =
      dataSource.getRepository('priceMode')
    const dataPriceMode: DataPriceMode[] = [{ name: 'hora' }, { name: 'dia' }]

    for (const x of dataPriceMode) {
      const query: PriceMode | null = await repoPriceMode.findOneBy({
        name: x.name,
      })
      if (!query) {
        const createPriceMode: PriceMode = repoPriceMode.create(x)
        await repoPriceMode.save(createPriceMode)
      }
    }
  }
}
