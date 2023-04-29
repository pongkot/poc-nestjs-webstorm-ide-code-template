#set( $i = $NAME.split("[.]") )
#set( $j = "${i.get(0).substring(0, 1).toUpperCase()}${i.get(0).substring(1)}" )
#set( $k =  "${i.get(1).substring(0, 1).toUpperCase()}${i.get(1).substring(1)}" )

import { Injectable } from '@nestjs/common'

@Injectable()
export class ${j}${k} {}