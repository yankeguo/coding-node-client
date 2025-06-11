# IssueTypeDetailWithSplit

事项类型详情(带分解类型)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | **string** | 描述 | [optional] [default to '']
**Id** | **number** | 事项类型 ID | [optional] [default to undefined]
**IsSystem** | **boolean** | 是否是系统类型 | [optional] [default to false]
**IssueType** | **string** | 事项类型大类 | [optional] [default to '']
**Name** | **string** | 事项类型名称 | [optional] [default to '']
**SplitTargetIssueTypeId** | **Array&lt;number&gt;** | 可分解类型 ID，SplitType &#x3D; SPECIFIC_TYPE 时需指定 | [optional] [default to undefined]
**SplitType** | **string** | 需求分解类型，SPECIFIC_TYPE - 可分解为制定需求类型，UNSPLITTABLE - 不可分解需求，ALL_REQUIREMENT - 可分解为全部需求类型 | [optional] [default to '']

## Example

```typescript
import { IssueTypeDetailWithSplit } from './api';

const instance: IssueTypeDetailWithSplit = {
    Description,
    Id,
    IsSystem,
    IssueType,
    Name,
    SplitTargetIssueTypeId,
    SplitType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
