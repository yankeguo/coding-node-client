# ArtifactRepositoryPageBean

制品仓库列表分页返回体

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InstanceSet** | [**Array&lt;ArtifactRepositoryBean&gt;**](ArtifactRepositoryBean.md) | 分页数据列表 | [optional] [default to undefined]
**PageNumber** | **number** | 页码 | [optional] [default to undefined]
**PageSize** | **number** | 每页展示数量 | [optional] [default to undefined]
**TotalCount** | **number** | 数据总数 | [optional] [default to undefined]

## Example

```typescript
import { ArtifactRepositoryPageBean } from './api';

const instance: ArtifactRepositoryPageBean = {
    InstanceSet,
    PageNumber,
    PageSize,
    TotalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
