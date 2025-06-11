# DescribeCodingCIBuildsData

获取构建计划的构建列表

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BuildList** | [**Array&lt;CodingCIBuild&gt;**](CodingCIBuild.md) | 构建列表 | [optional] [default to undefined]
**PageNumber** | **number** | 页码 | [optional] [default to undefined]
**PageSize** | **number** | 每页多少条 | [optional] [default to undefined]
**TotalCount** | **number** | 总条数 | [optional] [default to undefined]

## Example

```typescript
import { DescribeCodingCIBuildsData } from './api';

const instance: DescribeCodingCIBuildsData = {
    BuildList,
    PageNumber,
    PageSize,
    TotalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
