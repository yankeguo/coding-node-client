# DescribeCdDeployTimeByProjectResponseData

DescribeCdDeployTimeByProjectResponseData 结构

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Details** | [**Array&lt;CdDeployTimeDetail&gt;**](CdDeployTimeDetail.md) | 各应用发布时长详情 | [optional] [default to undefined]
**EndDate** | **string** | 结束时间 | [optional] [default to '']
**StartDate** | **string** | 开始时间 | [optional] [default to '']
**Total** | [**CdDeployTime**](CdDeployTime.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DescribeCdDeployTimeByProjectResponseData } from './api';

const instance: DescribeCdDeployTimeByProjectResponseData = {
    Details,
    EndDate,
    StartDate,
    Total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
