export interface RankPlayer {
    classId: number
    nickname: string
    value: number
}

export interface TopRankPlayerBodyProps {
    title: string
    data: RankPlayer[]
}

const classIcon = [
    './class/fighter.png',
    './class/mechanician.png',
    './class/pikeman.png',
    './class/archer.png',
    './class/magician.png',
    './class/priestess.png'
]

function TopRankBody({ title, data }: TopRankPlayerBodyProps) {
    return (
        <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col" style={{ marginBottom: '10rem' }}>
            <div className="flex-1">
                <p className="absolute top-0 left-0 right-0 py-2.5 px-8 bg-[#a99260] rounded-full text-xl text-center font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                    {title}
                </p>
                <div>
                    <ul role="list" className="divide-y divide-gray-200">
                        {data.map((rankPlayer, index) => (
                            <li key={index} className="py-3">
                                <div className="flex space-x-3">
                                    <img className="h-6 w-6 rounded-full" src={classIcon[rankPlayer.classId]} alt="" />
                                    <div className="flex-1 space-y-1">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-sm font-medium">{rankPlayer.nickname}</h3>
                                            <p className="text-sm text-gray-500 left-10">{rankPlayer.value}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export { TopRankBody }