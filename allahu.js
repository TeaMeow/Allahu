export function explode(data, self)
{
	var res = {}

    data.forEach((v) => res[v] = self[v])

    return res
}
