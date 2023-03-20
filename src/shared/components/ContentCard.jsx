import { UilCommentAltDots } from '@iconscout/react-unicons'

const ContentCard = ({ data }) => {
  return (
    <div className="flex items-start rounded-xl bg-white p-4 shadow-md">
      <div className="flex h-10 w-12 items-center justify-center rounded-full border border-green-100 bg-green-50">
        <UilCommentAltDots color="green" />
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">{data?.User.nickName}</h2>
        <p className="mt-2 text-sm text-gray-500">{data?.content}</p>
        <p className="mt-2 text-xs text-gray-500">created </p>
      </div>
    </div>
  )
}

export default ContentCard
