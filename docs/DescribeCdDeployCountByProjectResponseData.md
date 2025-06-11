# DescribeCdDeployCountByProjectResponseData

DescribeCdDeployCountByProjectResponseData 结构

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Details** | [**Array&lt;CdDeployCountDetail&gt;**](CdDeployCountDetail.md) | 各应用发布次数详情 | [optional] [default to undefined]
**EndDate** | **string** | 结束时间 | [optional] [default to '']
**StartDate** | **string** | 开始时间 | [optional] [default to '']
**Total** | [**CdDeployCount**](CdDeployCount.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DescribeCdDeployCountByProjectResponseData } from './api';

const instance: DescribeCdDeployCountByProjectResponseData = {
    Details,
    EndDate,
    StartDate,
    Total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
